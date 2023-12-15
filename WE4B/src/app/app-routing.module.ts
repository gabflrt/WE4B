import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {path:'', component: RestaurantListComponent},
  {path:'account', component: AccountComponent},
  {path: 'orders', component: OrdersComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
