import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  authenticate(client: Client): Observable<Client | null> {
    return this.http.get<Client[]>(this.apiUrl).pipe(
      map(clients => {
        const user = clients.find(
          c => c.email === client.email && c.password === client.password
        );
        return user ? user : null;
      })
    );
  }

}
