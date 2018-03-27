import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { UserSessionService } from './usersessionservice'
import { Observable } from 'rxjs/Rx';

interface TokenPayload {
  token: string;
}
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private userSessionService: UserSessionService) {

  }

  private loginURL = '/login';



  login(username: string, password: string): Observable<string> {
    return this.http.post(this.loginURL, JSON.stringify({username: username, password: password}))
            .map((data: TokenPayload) => {
                // login successful if there's a jwt token in the response
                console.log(data);
                let token = data.token;
                if (token) {
                    this.userSessionService.setTokenAndUser(token, username);

                    // return true to indicate successful login
                    console.log(this.userSessionService.getToken());
                    return "true";
                } else {
                    // return false to indicate failed login
                    console.log("no")
                    return "false";
                }
            }).catch((error:any) => Observable.throw(error || 'Server error'));
  }

}
