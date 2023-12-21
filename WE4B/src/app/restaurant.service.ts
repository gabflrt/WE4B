import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  ServArray : Restaurant[] = []

  baseUrl = 'http://localhost:4200'
  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
    }

    getAllRestaurants() : Observable<Restaurant[]> {
      return this.http.get<Restaurant[]>(`${this.baseUrl}/restaurants`)
    }
      

  getData() : Restaurant {
  
    return new Restaurant(1,"Auberge-fleurie", "Cuisine Française, Européenne", "2022-01-13", "41 rue des acacias",4.5,"./assets/img/1.jpg", 1);
  
  }
  getPrdByIndex(restaurant_id: number): Restaurant {
  return this.ServArray[restaurant_id]
  }




  }
