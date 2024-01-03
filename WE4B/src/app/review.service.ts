

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'your_backend_api_url';

  constructor(private http: HttpClient) { }

  submitReview(restaurantId: number, reviewData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/restaurants/${restaurantId}/reviews`, reviewData);
  }
}

