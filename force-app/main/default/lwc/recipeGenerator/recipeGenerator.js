import { LightningElement } from 'lwc';
import generateAIRecipes from '@salesforce/apex/AIRecipeController.generateAIRecipes';

export default class RecipeGenerator extends LightningElement {
    formData = {};
    recipes = [];
    error = '';
    isLoading = false;

    async handleGenerate(event) {
        this.error = '';
        this.recipes = [];
        this.formData = event.detail.formData;
        console.log("Received Data:", JSON.stringify(this.formData));

        // Start loader
        this.isLoading = true;

        // ---------- Validation ----------
        if (!this.formData?.ingredients) {
            this.error = 'Please enter ingredients';
            this.isLoading = false;
            return;
        }
        if (!this.formData?.mealType) {
            this.error = 'Please enter meal type';
            this.isLoading = false;
            return;
        }
        if (!this.formData?.servings) {
            this.error = 'Please enter servings';
            this.isLoading = false;
            return;
        }
        if (!this.formData?.dietaryRestrictions) {
            this.error = 'Please enter dietary restrictions';
            this.isLoading = false;
            return;
        }

        // ---------- Call Apex ----------
        try {
            const result = await generateAIRecipes({
                ingredients: this.formData.ingredients,
                dietaryRestrictions: this.formData.dietaryRestrictions,
                mealType: this.formData.mealType,
                servings: this.formData.servings
            });

            console.log("Result:", result);

            this.formatResponse(result);

        } catch (error) {
            console.error("Error:", error);
            this.error = error.body?.message || error.message || 'An unexpected error occurred.';
        }

        // Stop loader
        this.isLoading = false;
    }

    // ---------- Parse & format AI response ----------
    formatResponse(result) {
        try {
            // Remove unwanted extra spaces / newlines
            const clean = result.replaceAll(/\u00A0/g, ' ').trim();

            // Extract JSON part if AI adds text before/after
            const jsonStart = clean.indexOf("{");
            const jsonEnd = clean.lastIndexOf("}");
            const jsonString = clean.substring(jsonStart, jsonEnd + 1);

            const parsed = JSON.parse(jsonString);

            if (parsed?.recipes?.length > 0) {
                this.recipes = parsed.recipes.map(recipe => {
                    recipe.tags = recipe.tags || [];

                    // Calculate total time
                    if (!recipe.total_time) {
                        const prep = parseInt(recipe.prep_time) || 0;
                        const cook = parseInt(recipe.cook_time) || 0;
                        recipe.total_time = `${prep + cook} min`;
                    }
                    return recipe;
                });
            } else {
                this.error = 'No recipes found. Please try again with different inputs.';
            }

        } catch (e) {
            console.error("Parsing Error:", e);
            this.error = 'Failed to read AI response. Try again.';
        }
    }
}
