import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountinfos',
  templateUrl: './accountinfos.component.html',
  styleUrls: ['./accountinfos.component.css']
})
export class AccountinfosComponent implements OnInit {
  client: Client | null = null;

  constructor(private sessionService: SessionService,private router:Router ) { }

  ngOnInit(): void {
    this.client = this.sessionService.client;
  }

  logout() {
    this.sessionService.client = null;
    window.location.reload();
    this.router.navigate(['/account']); 
    }
}
