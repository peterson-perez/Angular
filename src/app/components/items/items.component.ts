import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

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
      }
    ];
  }

}
