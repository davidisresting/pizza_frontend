import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "pizza",
    pathMatch: "full",
  },
  {
    path: "pizza",
    loadChildren: () =>
      import("./pizza/pizza.module").then((m) =>
        m.PizzaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
