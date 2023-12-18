import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FormsModule } from '@angular/forms';
import { RestaurantFullComponent } from './restaurant-full/restaurant-full.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormcreacompteComponent } from './formcreacompte/formcreacompte.component';
import { FormcrearestoComponent } from './formcrearesto/formcrearesto.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { MesRestosComponent } from './mes-restos/mes-restos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantFullComponent,
    NavbarComponent,
    AccountComponent,
    OrdersComponent,
    NavbarComponent,
    FormcreacompteComponent,
    FormcrearestoComponent,
    MesRestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
