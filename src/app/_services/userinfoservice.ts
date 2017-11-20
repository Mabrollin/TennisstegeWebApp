import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserInfoService {

  public token: string;
public currentUser: string;

  constructor(private http: Http) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  private infoURL = 'http://localhost:8080/user/getContactInfo?username=';


  getContactInfo(): Observable<Response> {
  //  let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
//        let options = new RequestOptions({ headers: headers });
    return this.http.get(this.infoURL+this.currentUser) // ...using post request
      .map((res: Response) => {
        console.log(res);
      res.json();

      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
