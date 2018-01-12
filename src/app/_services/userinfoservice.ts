import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserSessionService } from './usersessionservice';

import { User, ContactInfo } from '../_properties';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserInfoService {

  public token: string;
public currentUser: string;

  constructor(private http: HttpClient, private userSessionService: UserSessionService) {
    this.currentUser = userSessionService.getCurrentUser();
  }

  private baseUserURL = 'http://tennisstege.eu-west-2.elasticbeanstalk.com/user/';
  private updateURL = '/updateContactInfo'


  getContactInfo(): Observable<any> {
    return this.http.get<User>(this.baseUserURL+this.currentUser);
  }

  updateContactInfo(contactInfo: ContactInfo): Observable<any> {
    return this.http.put<ContactInfo>(this.baseUserURL+this.currentUser + this.updateURL, contactInfo);
  }

}
