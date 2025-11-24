import { LightningElement } from 'lwc';
import generateAIRecipes from '@salesforce/apex/AIRecipeController.generateAIRecipes';
export default class RecipeGenerator extends LightningElement {
    formData = {};
    recipes=[]
   generatedOutput = '';
    async handleGenerate(event) {
        this.formData = event.detail.formData;
        console.log("Received Data:", JSON.stringify(this.formData));
          
        try{
         
         const result =  await generateAIRecipes({

         ingredients: this.formData.ingredients, 
         dietaryRestrictions:  this.formData.dietaryRestrictions, 
         mealType: this.formData.mealType, 
         servings: this.formData.servings,  
        
        
           })
            console.log("Result:", result);
            this.formatResponse(result)
        }catch(error){
            console.error("Error:", error);
        }
   
    }
    formatResponse(){
         const correction =  result.replaceAll(/[\n\u00A0]/g, '').trim()
         this.recipes= JSON.parse(correction)
        const lines = this.generatedOutput.split('\n');
        const formattedOutput = lines.map(line => line.trim()).join('\n');
        this.generatedOutput = formattedOutput;
    }
    
}
