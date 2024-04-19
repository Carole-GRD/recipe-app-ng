import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from './recipe.model';
import { NgIf } from '@angular/common';
import { RecipeService } from './recipe.service';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    NgIf,
    RouterModule
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})


export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe = new Recipe('', '', '', []);

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
