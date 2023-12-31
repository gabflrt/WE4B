import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formconnexion',
  templateUrl: './formconnexion.component.html',
  styleUrls: ['./formconnexion.component.css']
})
export class FormconnexionComponent implements OnInit {
  client: Client = new Client(0, "", "", "", 0, "", new Date(), "", false);
  errorMessage: string | null = null;

  constructor(private clientService: ClientService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.clientService.authenticate(this.client).subscribe(client => {
      if (client) {
        console.log('Authenticated succeeded');
        this.sessionService.client = client;
        this.router.navigate(['/accountinfos']);
      } else {
        console.log('Authentication failed');
        this.errorMessage = 'La connexion a échoué. Veuillez vérifier vos identifiants.';
      }
    });
  }




}
