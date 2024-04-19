import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgFor,
    RouterModule
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})


export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  // dans le fichier tsconfig.json, on a ajouté "strictPropertyInitialization": false pour éviter l'erreur suivante:
  // error TS2564: Property 'recipes' has no initializer and is not definitely assigned in the constructor.

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    // console.log('new recipe');
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
