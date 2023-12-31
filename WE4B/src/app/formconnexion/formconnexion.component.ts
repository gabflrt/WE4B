import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-formconnexion',
  templateUrl: './formconnexion.component.html',
  styleUrls: ['./formconnexion.component.css']
})
export class FormconnexionComponent implements OnInit {
  client: Client = new Client(0, "", "", "", 0, "", new Date(), "", false);

  constructor(private clientService: ClientService, private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  login() {
    this.clientService.authenticate(this.client).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        console.log('Authenticated succeeded');
        this.sessionService.client = this.client;
      } else {
        console.log('Authentication failed');

      }
    });
  }


}
