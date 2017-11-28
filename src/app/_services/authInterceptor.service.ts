import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { UserSessionService } from './usersessionservice';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userSessionService: UserSessionService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userSessionService.getToken()}`
      }
    });
    return next.handle(req);
  }
}
// src/app/auth/token.interceptor.ts
