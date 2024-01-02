import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent {

  @Input() restaurant!: Restaurant;
  @Input() numberOfStars!: number;
  buttonDisabled: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  readMore() {
    this.router.navigate(['/', 'restaurant', this.restaurant.id]);
  }

  addLike() {
    if (this.restaurant.likes >= 0) {
      this.restaurant.likes++;
      this.buttonDisabled = true;
    }
  }

  removeLike() {
    if (this.restaurant.likes > 0) {
      this.restaurant.likes--;
      this.buttonDisabled = false;
    }
  }

  getRange(number: number): number[] {
    return new Array(number);
  }
}
