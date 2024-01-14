import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { ReviewService } from '../review.service';
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
  reviews: Array<any> = [];
  newReview: any = {};

  constructor(
    private activatedroute: ActivatedRoute,
    private restaurantService: RestaurantService,
    @Inject(ReviewService) private reviewService: ReviewService,
    public dialog: MatDialog,
    private sessionService: SessionService
  ) {
    this.restaurant_id = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0');
    console.log("this restaurant id : ",this.restaurant_id)
    console.log("Type of restaurant_id:", typeof this.restaurant_id);
    
    this.restaurantService.getRestaurantFromId(this.restaurant_id).subscribe((data:Restaurant) => {

      this.restaurant = data;
      console.log("data : ",data);
      console.log("this restaurant : ",this.restaurant);
      if (this.restaurant && this.restaurant.horaires) {
        this.restaurant.horaires = this.mapJsonToHoraires(this.restaurant.horaires);
      } else {
        
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

  submitReview() {
    if (this.newReview.comment && this.newReview.rating) {
      this.reviewService.submitReview(this.restaurant_id, this.newReview).subscribe((response) => {
        this.restaurant = response;
        this.newReview = {};
      });
    }
  }
}
