import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  public token: string;

  constructor(private http: Http) {
    var currentUser = localStorage.getItem('currentUser');
    //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      //      this.token = currentUser && currentUser.token;
  }

  private loginURL = 'http://localhost:8080/login?';


  login(username: string, password: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'text/plain'}); // ... Set content type to JSON
    //headers.append("Authorization", "Basic " + btoa('my-trused-client' + ":" + 'secret'));
    var options = new RequestOptions({
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        });

    return this.http.post(this.loginURL+'username='+username+'&password='+password, headers)
    .map((res: Response) => {
      console.log(res.text());

      return res.text();

    }) // ...and calling .json() on the response to return data
    .catch((error: any) => Observable.throw("fel: " + error));
     // ...using post request
    //...errors if any
  }

}
