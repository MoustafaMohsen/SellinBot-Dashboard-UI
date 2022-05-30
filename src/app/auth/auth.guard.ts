import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data: DataService, private router: Router) { };
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('CanActivate called');
    let isLoggedIn = this.data.isAuthenticated();
    if (isLoggedIn) {
      return true
    } else {
      this.router.navigate(['']);
    }
  }

}
