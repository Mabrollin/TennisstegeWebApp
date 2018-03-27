import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NewChallenge, Record } from '../_properties';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChallengeService {
  constructor(private http: HttpClient) { }

  private baseChallengeURL = '/challenge';
  private newChallengeURL = '/new';
  private recordURL = '/record';


  newChallenge(newChallenge: NewChallenge): Observable<Response> {
    let bodyString = JSON.stringify(newChallenge); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseChallengeURL + this.newChallengeURL, bodyString)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  record(challengeId: number, record: Record): Observable<Response> {
    let bodyString = JSON.stringify(record); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseChallengeURL + "/" + challengeId + this.recordURL, bodyString)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
