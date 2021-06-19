import{ Injectable} from '@angular/core';
import{ Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable( {providedIn: 'root'})
export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken and Waffles',
            'This is simply a test',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
            
            [
                new Ingredient('chicken',6),
                new Ingredient('waffles',12),

            ]),
        
        new Recipe(
            'Another Test recipe',
            'This is simply a test',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
                
            [
                new Ingredient('brats',30),
                new Ingredient('mustard',3),
    
    
                ]),
    ];
    // private recipes: Recipe[] = []
    constructor( private slService: ShoppingListService){


    }

    setRecipes( recipes: Recipe []){
        this.recipes = recipes;
        console.log(this.recipes.slice());
        this.recipesChanged.next(this.recipes.slice());
    }


    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    

    addShoppingListToIngredients(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);

    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

    }

    updateRecipe( index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe; 
    this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        // console.log(this.recipes.slice())
        this.recipesChanged.next(this.recipes.slice());
    }
}