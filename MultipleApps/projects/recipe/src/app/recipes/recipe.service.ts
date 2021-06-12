import{ Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'A Test recipe',
            'This is simply a test',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
            
            [
                new Ingredient('chicken',6),
                new Ingredient('waffles',12),

            ]),
        
        new Recipe(
            'A Test recipe',
            'This is simply a test',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
                
            [
                new Ingredient('brats',30),
                new Ingredient('mustard',3),
    
    
                ]),
    ];

    constructor( private slService: ShoppingListService){


    }
    getRecipies(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    

    addShoppingListToIngredients(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
}