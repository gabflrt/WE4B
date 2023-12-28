import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ReservationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  validateReservation(form: any): void {
    if (form.valid) {
      // Process reservation data as needed
      this.dialogRef.close();
    }
  }

  closeReservationForm(): void {
    this.dialogRef.close();
  }
}
