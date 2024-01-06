import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restosgerant',
  templateUrl: './restosgerant.component.html',
  styleUrls: ['./restosgerant.component.css']
})
export class RestosgerantComponent {
  restaurants: Restaurant[] = [];
  restaurant!: Restaurant;

  constructor(private restaurantService: RestaurantService, private sessionService: SessionService, private router: Router) { }

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

  openUpdateForm(restaurantData: Restaurant) {
    // Copiez les détails du restaurant dans le restaurant de ce composant
    this.restaurant = { ...restaurantData };
    // Ou si vous utilisez le routage :
    this.router.navigate(['/update-restaurant', this.restaurant.id]);
  }
}

