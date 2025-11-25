import { LightningElement, api } from 'lwc';

export default class RecipeStatBox extends LightningElement {

    @api tittle;
    @api value;
    @api iconName;
    
}