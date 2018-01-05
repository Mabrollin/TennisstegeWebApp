import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserSessionService } from './usersessionservice';

import { LadderRepresentation } from '../_properties/ladderrepresentation';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LadderService {

  public token: string;
public currentUser: string;

  constructor(private http: HttpClient, private userSessionService: UserSessionService) {
    this.currentUser = userSessionService.getCurrentUser();
  }

  private baseUserURL = 'http://tennisstege.eu-west-2.elasticbeanstalk.com/ladder/';


  getLadder(name: string): Observable<any> {
    return this.http.get<LadderRepresentation>(this.baseUserURL+name);
  }

}
