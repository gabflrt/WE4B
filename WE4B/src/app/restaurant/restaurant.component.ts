import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent {

  @Input() restaurant!:Restaurant;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  readMore() {
    this.router.navigate(['/', 'restaurant', this.restaurant.restaurant_id])
}
  

}
