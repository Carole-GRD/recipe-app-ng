import { EventEmitter } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private   ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();   // return a new array which is an exact copy of the ingredients array
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);   // add an ingredient to the ingredients array (the original array is modified)
        this.ingredientsChanged.emit(this.ingredients.slice());   // emit the new ingredients array (a copy of the original array)
    }

    addIngredients(ingredients: Ingredient[]) {

        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        // ❗L'inconvénient de cette méthode est qu'elle émet un événement pour chaque ingrédient ajouté.

        // ==============================

        // ➡️ Il est préférable d'émettre un seul événement après l'ajout de tous les ingrédients.
        this.ingredients.push(...ingredients);   // add multiple ingredients to the ingredients array (the original array is modified)
        this.ingredientsChanged.emit(this.ingredients.slice());   // emit the new ingredients array (a copy of the original array)
    }
}