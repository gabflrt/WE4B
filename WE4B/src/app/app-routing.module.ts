import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { Restaurant } from './models/restaurant';
import { RestaurantFullComponent } from './restaurant-full/restaurant-full.component';

const routes: Routes = [
  {path:'', component: RestaurantListComponent},
  {path:'restaurant/:restaurant_id', component: RestaurantFullComponent}  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


