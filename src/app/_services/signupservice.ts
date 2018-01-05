import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NewPlayer } from '../_properties/newplayer';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {
  constructor(private http: Http) { }

  private registerURL = 'http://tennisstege.eu-west-2.elasticbeanstalk.com/sign-up';


  signupPlayer(newPlayer: NewPlayer) : Observable<Response> {
    let bodyString = JSON.stringify(newPlayer); // Stringify payload
       let headers      = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' }); // ... Set content type to JSON
       let options       = new RequestOptions({ headers: headers }); // Create a request option
       return this.http.post(this.registerURL, bodyString, options) // ...using post request
                        .map((res:Response) => res.text()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
