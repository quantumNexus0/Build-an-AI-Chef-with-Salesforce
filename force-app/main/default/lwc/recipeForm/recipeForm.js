import { LightningElement } from 'lwc';

export default class RecipeForm extends LightningElement {
    formData={
        ingredients:'',
        dietaryRestrictions:'none',
        servings:'4',
        mealType:''
    };

    dietaryOptions = [
        { label: 'None', value: 'None' },
        { label: 'Vegan', value: 'vegan' },
        { label: 'Gluten Free', value: 'gluten free' },
        { label: 'Nut Free', value: 'nut free' },
        { label: 'Dairy Free', value: 'dairy free' },
        { label: 'Keto', value: 'keto' },
        { label: 'Low Carb', value: 'low carb' },
        { label: 'Paleo', value: 'paleo' },
        { label: 'Low Fat', value: 'low fat' },
        { label: 'Low Sugar', value: 'low sugar' },
        { label: 'Low Sodium', value: 'low sodium' },
        { label: 'Low Cholesterol', value: 'low cholesterol' },
        { label: 'Low Protein', value: 'low protein' },
        { label: 'Low Fiber', value: 'low fiber' },
        { label: 'Low Iron', value: 'low iron' },
        { label: 'Low Potassium', value: 'low potassium' },
        { label: 'Low Phosphorus', value: 'low phosphorus' },
        { label: 'Low Calcium', value: 'low calcium' },
        { label: 'Low Magnesium', value: 'low magnesium' },
        { label: 'Low Zinc', value: 'low zinc' },
        { label: 'Low Copper', value: 'low copper' },
        { label: 'Low Selenium', value: 'low selenium' },
        { label: 'Low Manganese', value: 'low manganese' },
        { label: 'Low Iodine', value: 'low iodine' },
        { label: 'Low Fluoride', value: 'low fluoride' },
        { label: 'Low Chromium', value: 'low chromium' },
        { label: 'Low Molybdenum', value: 'low molybdenum' },
        { label: 'Low Cobalt', value: 'low cobalt' },
        { label: 'Low Nickel', value: 'low nickel' },
        { label: 'Low Arsenic', value: 'low arsenic' },
        { label: 'Low Cadmium', value: 'low cadmium' },
        { label: 'Low Lead', value: 'low lead' },
        { label: 'Low Mercury', value: 'low mercury' },
        { label: 'Low Thallium', value: 'low thallium' }
    ];

    mealTypeOptions = [
        { label: 'Breakfast', value: 'breakfast' },
        { label: 'Lunch', value: 'lunch' },
        { label: 'Dinner', value: 'dinner' },
        { label: 'Snack', value: 'snack' },
        { label: 'Appetizer', value: 'appetizer' },
        { label: 'Dessert', value: 'dessert' },
        { label: 'Beverage', value: 'beverage' },
        { label: 'Side Dish', value: 'side dish' },
        { label: 'Main Course', value: 'main course' },
        { label: 'Soup', value: 'soup' }
    ];

 handleChange(event) {
        const { name, value } = event.target;

        this.formData = {
            ...this.formData,
            [name]: value
        };
    }

      generateRecipes() {
        this.dispatchEvent(
            new CustomEvent("generate", {
                detail: { formData: this.formData }
            })
        );

    }
}
