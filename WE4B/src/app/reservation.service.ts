// restaurant.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  constructor(private http: HttpClient) {}

  saveReservation(reservationData: any): Observable<any> {
    const url = `http://localhost:3000/reservations`; 
    return this.http.post(url, reservationData);
  }

  getReservationsByClient(clientId: number): Observable<any> {
    const url = `http://localhost:3000/reservations?id_client=${clientId}`;
    return this.http.get(url);
  }
}
