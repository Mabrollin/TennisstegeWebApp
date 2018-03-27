import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { UserSessionService } from './usersessionservice';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private baseEndpointURL = "http://localhost:5000";//http://tennisstege.eu-west-2.elasticbeanstalk.com
  constructor(private userSessionService: UserSessionService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: this.baseEndpointURL + req.url,
      setHeaders: {
        Authorization: this.userSessionService.hasToken()? "Bearer " + this.userSessionService.getToken(): "",
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    });
    return next.handle(req);
  }
}
// src/app/auth/token.interceptor.ts
