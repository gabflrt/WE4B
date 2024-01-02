import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Client } from '../models/client';
import { SessionService } from '../session.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userReservations: any[] = [];
  client: Client | null = null;
  client_id!: number;

  constructor(
    private reservationService: ReservationService,
    private sessionService: SessionService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.client = this.sessionService.client;

    if (this.client) {
      this.client_id = this.client.id;
    }

    // Fetch user reservations
    this.reservationService.getReservationsByClient(this.client_id)
      .subscribe((reservations: any[]) => {
        this.userReservations = reservations;

        // Fetch restaurant names for each reservation
        this.userReservations.forEach(reservation => {
          this.restaurantService.getRestaurantFromId(reservation.id_resto)
            .subscribe(
              (restaurant) => {
                reservation.restaurantName = restaurant.title;
              },
              (error) => {
                console.error('Error fetching restaurant:', error);
                // Handle error if needed
              }
            );
        });
      }, error => {
        console.error('Error fetching reservations:', error);
        // Handle error if needed
      });
  }
}
