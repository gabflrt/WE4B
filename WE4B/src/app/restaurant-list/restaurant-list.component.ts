import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurantArray : Restaurant[] = []
constructor(private restaurantService : RestaurantService) { 
  this.restaurantService.getRestaurants().subscribe((data) => {
    this.restaurantArray = data
    });
 
}

minNote: number = 0;
maxNote: number = 5;

minDate: String = "1900-01-01";
maxDate: String = "2024-01-01";

villeRecherchee: string = '';

triDirection: string = 'default';

validateMinMaxValues() {
  if (this.maxNote > 5){
    this.maxNote = 5;
  }
  if (this.minNote < 0){
    this.minNote = 0;
  }
  if (this.minNote > this.maxNote) {
    this.minNote = this.maxNote;
  }
}

validateMinMaxDate() {
  if (this.maxDate > "2024-01-01"){
    this.maxDate = "2024-01-01";
  }
  if (this.minDate < "1900-01-01"){
    this.minDate = "1900-01-01";
  }
  if (this.minDate > this.maxDate) {
    this.minDate = this.maxDate;
  }
}

 
ngOnInit() {
   };
}






  

