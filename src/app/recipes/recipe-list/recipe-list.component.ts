import { OnInit, Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('name 1', 'description 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('name 2', 'description 2', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
