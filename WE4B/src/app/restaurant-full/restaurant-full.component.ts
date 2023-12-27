// restaurant-full.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { Horaires } from '../models/horaires';

@Component({
  selector: 'app-restaurant-full',
  templateUrl: './restaurant-full.component.html',
  styleUrls: ['./restaurant-full.component.css']
})
export class RestaurantFullComponent implements OnInit {
  restaurant_id!: number;
  restaurant!: Restaurant;

  constructor(private activatedroute: ActivatedRoute, private service: RestaurantService) {
    this.restaurant_id = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0');
    service.getRestaurantFromId(this.restaurant_id).subscribe((data) => {
      this.restaurant = data;

      // Map JSON horaires to Horaires class
      if (this.restaurant && this.restaurant.horaires) {
        this.restaurant.horaires = this.mapJsonToHoraires(this.restaurant.horaires);
      } else {
        // Provide default horaires if not present in the JSON data
        this.restaurant.horaires = new Horaires();
      }
    });
  }

  ngOnInit(): void {}

  addLike() {
    if (this.restaurant.likes >= 0) {
      this.restaurant.likes++;
    }
  }

  removeLike() {
    if (this.restaurant.likes > 0) {
      this.restaurant.likes--;
    }
  }

  private mapJsonToHoraires(jsonHoraires: any): Horaires {
    return new Horaires(
      jsonHoraires.Lundi || undefined,
      jsonHoraires.Mardi || undefined,
      jsonHoraires.Mercredi || undefined,
      jsonHoraires.Jeudi || undefined,
      jsonHoraires.Vendredi || undefined,
      jsonHoraires.Samedi || undefined,
      jsonHoraires.Dimanche || undefined
    );
  }
}
