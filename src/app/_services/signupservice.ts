import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NewPlayer } from '../_properties/newplayer';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) { }

  private registerURL = '/sign-up';


  signupPlayer(newPlayer: NewPlayer) : Observable<NewPlayer> {
    let bodyString = JSON.stringify(newPlayer);
      return this.http.post(this.registerURL, bodyString)
                        .catch((error:any) => Observable.throw(error));
  }

}
