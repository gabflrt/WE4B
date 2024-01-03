import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantFullComponent } from './restaurant-full/restaurant-full.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormcreacompteComponent } from './formcreacompte/formcreacompte.component';
import { FormcrearestoComponent } from './formcrearesto/formcrearesto.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { MesRestosComponent } from './mes-restos/mes-restos.component';
import { FormconnexionComponent } from './formconnexion/formconnexion.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RestaurantService } from './restaurant.service';
import { FilterPipe } from './filter.pipe';
import { FilterDatePipe } from './filter-date.pipe';
import { FilterCityPipe } from './filter-city.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TriPipe } from './tri.pipe';
import { AccountinfosComponent } from './accountinfos/accountinfos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';



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
    MesRestosComponent,
    FormconnexionComponent,
    FooterComponent,
    FilterPipe,
    FilterDatePipe,
    FilterCityPipe,
    ReservationFormComponent,
    TriPipe,
    AccountinfosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
  ],
  providers: [RestaurantService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }


