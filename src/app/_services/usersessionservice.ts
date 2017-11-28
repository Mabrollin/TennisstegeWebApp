import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserSessionService {
  constructor() {
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  setTokenAndUser(token: string, user: string): void{
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', user);
  }

  getCurrentUser(): string{
    return localStorage.getItem('currentUser');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  hasActiveToken(): boolean {
    let token: string = localStorage.getItem('token');
    if(token && token!=null && token != '')
      return this.isActive(token);
    else
      return false;
  }

  isActive(token: string){
    //Mock
    return true;
  }

}
