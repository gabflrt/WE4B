import { Injectable } from '@angular/core';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _client: Client | null = null;

  get client(): Client | null {
    return this._client;
  }

  set client(client: Client | null) {
    this._client = client;
  }
}
