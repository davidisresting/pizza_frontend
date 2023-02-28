import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { TableActions } from '../../enums/table-actions.enum';
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
  constructor(private router: Router) {}
  ngOnInit(): void {}
  selectPizza(data: { pizza: Pizza, action: TableActions }) {
    this.router.navigate(['pizza', 'form', data.pizza.id]);
  }

  executeCommandBarAction(action: CommandBarActions) {
    switch (action) {
      case CommandBarActions.Create: {
        this.router.navigate(["pizza", "form"]);
        return 
      }
      case CommandBarActions.DeleteAll: {
        return;
      }
      default: {
        return;
      }
    }
  }
}
