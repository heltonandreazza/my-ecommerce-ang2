import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addedItem = new EventEmitter(); // removed because I dont like types <{name: string, amount: number}>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(nameInput, amountInput) {
    this.addedItem.emit({ name: nameInput.value, amount: amountInput.value });
  }

}
