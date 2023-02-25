import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaRoutingModule } from './pizza-routing.module';
import { MaterialModule } from '../material/material.module';
import { PizzaCommandBarComponent } from './components/pizza-command-bar/pizza-command-bar.component';



@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaFormComponent,
    ListComponent,
    FormComponent,
    PizzaCommandBarComponent,
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    MaterialModule
  ]
})
export class PizzaModule { }
