import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-full',
  templateUrl: './restaurant-full.component.html',
  styleUrls: ['./restaurant-full.component.css']
})

export class RestaurantFullComponent implements OnInit {
  restaurant_id! : number
  restaurant! : Restaurant
  constructor(private activatedroute : ActivatedRoute, service : RestaurantService) {
  this.restaurant_id = parseInt(this.activatedroute.snapshot.paramMap.get('restaurant_id') || '0')
  this.restaurant = service.getData()
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
