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
  ) {
    this.client = data.client;
    this.restaurant = data.restaurant;

    this.reservationForm = this.formBuilder.group({
      name: [this.client?.lastName, Validators.required],
      seats: [null, [Validators.required, Validators.max(this.restaurant.capacite)]],
      date: [null, Validators.required],
      time: [null, Validators.required],
    });
  }

  validateReservation(): void {
    if (this.reservationForm.valid) {
      const datetimeValue = this.reservationForm.get('datetime')?.value;
      // Process reservation data with datetimeValue
      this.dialogRef.close();
    }
  }
  

  closeReservationForm(): void {
    this.dialogRef.close();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.reservationForm.patchValue({ time: event.value });
  }
}
