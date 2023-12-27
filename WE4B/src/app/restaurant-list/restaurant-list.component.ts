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
ngOnInit(): void {

}
}
