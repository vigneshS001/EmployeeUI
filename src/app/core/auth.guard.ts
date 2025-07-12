import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
  
}
