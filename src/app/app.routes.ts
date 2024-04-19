import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { 
        path: 'recipes', 
        component: RecipesComponent, 
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: '**', redirectTo: 'recipes'}
];



/*
    Attention à l'ordre des routes. 
    Angular va lire les routes de haut en bas et va prendre la première route qui matche.
    Mettre la route 'new' avant la route ':id' sinon Angular va considérer 'new' comme un id !
*/
