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

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  addClient() {
    this.clientService.createClient(this.client).subscribe(response => {
      console.log(response);
    });
  }
}
