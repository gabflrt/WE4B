import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) { }

  canActivate(): boolean {
    if (this.sessionService.client) {
      return true;
    } else {
      this.router.navigate(['/login']); // Remplacez '/login' par la route de votre page de connexion
      return false;
    }
  }
}
