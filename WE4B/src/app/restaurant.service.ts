import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  ServArray : Restaurant[] = []
  constructor() { }
  getData() : Restaurant {
  
    return new Restaurant(1,"Auberge-fleurie", "Cuisine Française, Européenne", "2022-01-13", "41 rue des acacias",4.5,"./assets/img/1.jpg");
  
  }
  getPrdByIndex(restaurant_id: number): Restaurant {
  return this.ServArray[restaurant_id]
  }
  }
