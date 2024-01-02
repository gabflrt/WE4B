import { Component } from '@angular/core';
import { Client } from '../models/client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  client: Client | null = null;

  constructor(private sessionService: SessionService) { }
  ngOnInit(): void {
    this.client = this.sessionService.client;
  }

}
