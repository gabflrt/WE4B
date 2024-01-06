import { Injectable } from '@angular/core';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _client: Client | null = null;

  get client(): Client | null {
    const client = localStorage.getItem('client');
    return client ? JSON.parse(client) : null;
  }

  set client(client: Client | null) {
    if (client) {
      localStorage.setItem('client', JSON.stringify(client));
    } else {
      localStorage.removeItem('client');
    }
  }

  isAuthenticated(): boolean {
    return this._client !== null || this.client !== null;
  }
  getSessionId(): number | 1 {
    const client = this.client;
    return client ? client.id : 1;
  }
}
