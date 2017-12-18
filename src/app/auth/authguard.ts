import { Injectable } from '@angular/core';
import { UserSessionService } from '../_services/usersessionservice';
import { Observable } from "rxjs/Observable";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private userSessionService: UserSessionService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.userSessionService.hasActiveToken()){
      return true;
    }
     this.router.navigate(['/options']);
     return false;
  }
}
// src/app/auth/token.interceptor.ts
