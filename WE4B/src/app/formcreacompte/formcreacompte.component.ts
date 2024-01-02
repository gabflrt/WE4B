import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-formcreacompte',
  templateUrl: './formcreacompte.component.html',
  styleUrls: ['./formcreacompte.component.css']
})
export class FormcreacompteComponent implements OnInit {
  client: Client = new Client(0, "", "", "", 0, "", new Date(), "", false);
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  addClient() {
    this.errorMessage = null;
    if (!this.client.firstName || !this.client.lastName || !this.client.email || !this.client.phone || !this.client.adress || !this.client.password) {
      this.errorMessage = 'Tous les champs doivent être remplis.';
      return;
    }

    this.clientService.checkEmail(this.client.email).subscribe(exists => {
      if (exists) {
        this.errorMessage = 'Un compte avec cette adresse e-mail existe déjà.';
        return;
      }

      this.clientService.createClient(this.client).subscribe(response => {
        if (response) {
          console.log('Account creation succeeded');
          this.successMessage = 'Le compte a bien été créé.';
        } else {
          console.log('Account creation failed');
          this.errorMessage = 'La création du compte a échoué. Veuillez réessayer.';
        }
      });
    });
  }

}
