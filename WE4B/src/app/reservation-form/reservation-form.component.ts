// reservation-form.component.ts
import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../models/client';
import { SessionService } from '../session.service';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../restaurant.service';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker/datepicker-base';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  client: Client | null = null;
  restaurant!: Restaurant;
  reservationForm: FormGroup;
  @ViewChild('datepicker') datepicker!: MatDatepicker<Date>;

  constructor(
    public dialogRef: MatDialogRef<ReservationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
  ) {
    this.client = data.client;
    this.restaurant = data.restaurant;

    this.reservationForm = this.formBuilder.group({
      name: [this.client?.lastName, Validators.required],
      seats: [null, [Validators.required, Validators.max(this.restaurant.capacite)]],
      date: [null, Validators.required],
    });
  }


  validateReservation(): void {
    if (this.reservationForm.valid) {
      // Get form values
      const name = this.reservationForm.get('name')?.value;
      const seats = this.reservationForm.get('seats')?.value;
      const date = this.reservationForm.get('date')?.value;

      // Prepare reservation data
      const reservationData = {
        id_client: this.client?.id,
        id_resto: this.restaurant.id,
        name,
        date: this.formatDate(date), // Format date if needed
        nb_personnes: seats
      };

      // Save reservation using the service
      this.reservationService.saveReservation(reservationData)
        .subscribe(() => {
          console.log('Reservation saved successfully');
          this.dialogRef.close(); // Close the dialog
        }, error => {
          console.error('Error saving reservation:', error);
          // Handle error if needed
        });
    }
  }


  closeReservationForm(): void {
    this.dialogRef.close();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.reservationForm.patchValue({ time: event.value });
  }

  private formatDate(date: Date): string {
    // Implement date formatting logic if needed
    return date.toISOString();
  }
}
