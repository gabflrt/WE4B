import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Horaires } from './models/horaires';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  ServArray: Restaurant[] = []
  restaurant!: Restaurant;
  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('http://localhost:3000/restaurants')
  }

  getRestaurantFromId(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:3000/restaurants/` +id);
  }
  

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>('http://localhost:3000/restaurants', restaurant);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/restaurants/' + id);
  }

  updateRestaurant(restaurantData: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>('http://localhost:3000/restaurants/' + restaurantData.id, restaurantData);
  }

  getMaxId(): Observable<number> {
    return this.getRestaurants().pipe(
      map(restaurants => restaurants.map(restaurant => restaurant.id)),
      map(ids => Math.max(...ids))
    );
  }
  

}
