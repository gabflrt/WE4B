// restaurant-full.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { Horaires } from '../models/horaires';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Client } from '../models/client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-restaurant-full',
  templateUrl: './restaurant-full.component.html',
  styleUrls: ['./restaurant-full.component.css']
})
export class RestaurantFullComponent implements OnInit {
  restaurant_id!: number;
  restaurant!: Restaurant;
  client: Client | null = null;


  constructor(private activatedroute: ActivatedRoute, private service: RestaurantService, public dialog: MatDialog,private sessionService: SessionService) {
    this.restaurant_id = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0');
    this.service.getRestaurantFromId(this.restaurant_id).subscribe((data) => {
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

  ngOnInit(): void {
    this.client = this.sessionService.client;

  }

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

  openReservationForm(): void {
    const dialogRef = this.dialog.open(ReservationFormComponent, {
      width: '500px',
      data: { restaurant: this.restaurant, client: this.client }
    });
  }
}
