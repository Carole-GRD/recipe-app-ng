import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule, NgIf } from '@angular/common';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  
    RouterModule,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ShoppingListService]
})


export class AppComponent {
  
}
