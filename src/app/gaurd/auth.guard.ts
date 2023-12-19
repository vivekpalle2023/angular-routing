import { Injectable } from '@angular/core';
import {   ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class authGuard implements CanActivate { 
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return this.auth.isLoggedIn();
  }
}
