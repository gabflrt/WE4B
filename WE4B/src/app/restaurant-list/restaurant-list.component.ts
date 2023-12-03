import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurantArray : Restaurant[] = []
constructor() { }
ngOnInit(): void {
this.restaurantArray.push(new Restaurant(1,"Auberge-fleurie", "Cuisine Française, Européenne", "2022-01-13", "41 rue des acacias",4.5,"./assets/img/1.jpg"))
this.restaurantArray.push(new Restaurant(2,"Les Capucins", "Cuisine Française, Européenne", "2022-01-13", "45 rue des tournesols",4.5,"./assets/img/2.jpg"))
this.restaurantArray.push(new Restaurant(3,"Auberge la Gogoline", "Cuisine Française, Internationale", "2022-01-13", "23 rue des piverts",4.5,"./assets/img/3.jpg"))
this.restaurantArray.push(new Restaurant(4,"Au Fil des Saisons", "Cuisine Française, Européenne", "2022-01-13", "89 rue des arbres violets",4.5,"./assets/img/4.jpg"))
this.restaurantArray.push(new Restaurant(5,"Le Saint Martin", "Cuisine Française, Européenne", "2022-01-13", "78 rue des points",4.5,"./assets/img/5.jpg"))
}
}

