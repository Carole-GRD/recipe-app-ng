import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgFor
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})


export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
