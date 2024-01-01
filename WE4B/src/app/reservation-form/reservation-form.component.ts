import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../models/client';
import { SessionService } from '../session.service';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  client: Client | null = null;
  restaurant!: Restaurant;

  constructor(
    public dialogRef: MatDialogRef<ReservationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,


  ) {
    this.client = data.client;
    this.restaurant = data.restaurant;
  }

 validateReservation(form: any): void {
    if (form.valid) {
      const seatsInput = form.controls['seats'];
      const seatsValue = seatsInput.value;

      if (seatsValue && seatsValue <= this.restaurant.capacite) {
        // Process reservation data as needed
        this.dialogRef.close();
      } else {
        // Set custom error for max capacity validation
        seatsInput.setErrors({ 'maxCapacity': true });
      }
    }
  }

  closeReservationForm(): void {
    this.dialogRef.close();
  }
}
