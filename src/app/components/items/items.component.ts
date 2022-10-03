import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
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
    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id !== item.id)
    this.getTotal()
  }

  toggleItem(item: Item){
    this.getTotal()
  }

  getTotal() {
    this.total = this.items.filter
      (item => !item.completed)
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }

}
