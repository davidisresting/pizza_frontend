import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pizzas: Pizza[] = [
    {
      id: "1",
      name: "Margherita",
      size: "medium",
      price: 8.00
    }
  ]
  headers: { headerName: string, fieldName: keyof Pizza }[] = [
    { headerName: "Name", fieldName: "name" },
    { headerName: "Size", fieldName: "size" },
    { headerName: "Price", fieldName: "price" },
  ]
  constructor() {}
  ngOnInit(): void {}
  selectPizza(pizza: Pizza) {}
}
