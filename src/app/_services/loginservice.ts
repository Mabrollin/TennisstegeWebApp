import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserSessionService } from './usersessionservice'
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(private http: Http, private userSessionService: UserSessionService) {

  }

  private loginURL = 'http://tennisstege.eu-west-2.elasticbeanstalk.com/login';

    private headers = new Headers({'Content-Type': 'application/json'});


  login(username: string, password: string): Observable<string> {
    return this.http.post(this.loginURL, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    this.userSessionService.setTokenAndUser(token, username);

                    // return true to indicate successful login
                    return "ja";
                } else {
                    // return false to indicate failed login
                    return "false";
                }
            }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
