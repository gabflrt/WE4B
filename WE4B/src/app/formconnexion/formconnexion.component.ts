import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-formconnexion',
  templateUrl: './formconnexion.component.html',
  styleUrls: ['./formconnexion.component.css']
})
export class FormconnexionComponent implements OnInit {
  client: Client = new Client(0, "", "", "", 0, "", new Date(), "", false);

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  login() {
    this.clientService.authenticate(this.client).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        console.log('Authenticated succeeded');
        // Ici, vous pouvez gérer le cas où l'authentification a réussi
        // Par exemple, vous pouvez rediriger l'utilisateur vers une autre page
      } else {
        console.log('Authentication failed');
        // Ici, vous pouvez gérer le cas où l'authentification a échoué
        // Par exemple, vous pouvez afficher un message d'erreur à l'utilisateur
      }
    });
  }


}
