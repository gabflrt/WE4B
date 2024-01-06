import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-restosgerant',
  templateUrl: './restosgerant.component.html',
  styleUrls: ['./restosgerant.component.css']
})
export class RestosgerantComponent {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private sessionService: SessionService) { }

  ngOnInit() {
    const gerantId = this.sessionService.getSessionId();
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data.filter(restaurant => restaurant.id_gerant === gerantId);
    });
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id).subscribe(() => {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== id);
    });
  }

  updateRestaurant(id: number, restaurantData: Restaurant) {
    this.restaurantService.updateRestaurant(id, restaurantData).subscribe(updatedRestaurant => {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id === updatedRestaurant.id) {
          return updatedRestaurant;
        }
        return restaurant;
      });
    });
  }
}

