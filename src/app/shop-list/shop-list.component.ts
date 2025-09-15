import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemList } from './itemList';
@Component({
  selector: 'app-shop-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss',
})
export class ShopListComponent {
  item: string = '';
  list: ItemList[] = [];
  AddToShopList() {
    let itemList = new ItemList();
    itemList.name = this.item;
    itemList.id = this.list.length + 1;
    this.list.push(itemList);
    this.item = '';
    console.table(this.list);
  }
  ScratchedItem(itemFromList: ItemList){
    itemFromList.bought = !itemFromList.bought;
  }
  CleanShopList(){
    this.list = [];
  }
}
