import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecipeService {
      recipesChanged = new Subject<Recipe[]>();

      // private recipes: Recipe[] = [
      //       new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      //             , [new Ingredient('meat', 1),
      //             new Ingredient('fries', 12)
      //             ]),
      //       new Recipe('A Test Recipe2', 'This is simply a test22', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      //             , [new Ingredient('buns', 2),
      //             new Ingredient('meat', 2)])
      // ];

      getRecipes() {
            return this.recipes.slice();
      }

      private recipes: Recipe[]= [];

      constructor(private slService: ShoppingListService) { }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number) {
            return this.recipes[index];
      }

      addRecipe(recipe: Recipe) {
            this.recipes.push(recipe);
            this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
            this.recipes[index] = newRecipe;
            this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
            this.recipes.splice(index, 1);
            this.recipesChanged.next(this.recipes.slice());

      }

setRecipes(recipes: Recipe[]){
this.recipes = recipes;
this.recipesChanged.next(this.recipes.slice());
}

}