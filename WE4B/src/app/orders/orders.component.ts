import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Client } from '../models/client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userReservations: any[] = []; // Define a property to store user reservations
  client: Client | null = null;
  client_id!: number;
  constructor(private reservationService: ReservationService, private sessionService : SessionService ) {}

  ngOnInit(): void {
    // Assuming you have a way to get the user ID, replace '1' with the actual user ID
    this.client = this.sessionService.client;

    if (this.client){
      this.client_id = this.client.id;
    }

    // Fetch user reservations
    this.reservationService.getReservationsByClient(this.client_id)
      .subscribe((reservations: any[]) => {
        this.userReservations = reservations;
      }, error => {
        console.error('Error fetching reservations:', error);
        // Handle error if needed
      });
  }
}
