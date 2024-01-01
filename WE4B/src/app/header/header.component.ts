import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  client: Client | null = null;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.client = this.sessionService.client;
  }


}
