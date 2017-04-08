import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Ingredient 1', 10),
    new Ingredient('Ingredient 2', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
