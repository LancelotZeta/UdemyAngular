import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ,[new Ingredient('meat',1),
        new Ingredient('fries',12)
      ]),
        new Recipe('A Test Recipe2', 'This is simply a test22', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ,[new Ingredient('buns',2),
        new Ingredient('meat',2)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      constructor(private slService: ShoppingListService){}

      addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number){
return this.recipes[index];
      }

}