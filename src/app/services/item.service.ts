import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      ditail: 'roja',
      price: 56,
      quantity: 30,
      completed: false
    },
    {
      id: 1,
      title: 'aguacate',
      ditail: 'maduro',
      price: 45,
      quantity: 60,
      completed: false
    },
    {
      id: 2,
      title: 'platano',
      ditail: 'verde',
      price: 30,
      quantity: 20,
      completed: true
    }
  ];
  constructor() { }

  getItems() {

    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }
}
