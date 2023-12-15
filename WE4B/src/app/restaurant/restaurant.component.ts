import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent {

  @Input() restaurant!:Restaurant;

  constructor() {
  }
  ngOnInit(): void {
  }

  addLike(){
    if (this.restaurant.likes>=0){
      this.restaurant.likes++;
    }
  }

  removeLike(){
    if(this.restaurant.likes>0){
      this.restaurant.likes--;
    }
  }
  

}
