import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserSessionService } from './usersessionservice';

import { LadderRepresentation, NewLadder, LadderPlayer } from '../_properties';

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

  private baseLadderURL = '/ladder/';
  private addPlayerURL = '/addPlayer';
  private getPlayersURL = '/getPlayers';


  getLadder(name: string): Observable<any> {
    return this.http.get<LadderRepresentation>(this.baseLadderURL + name);
  }

  createLadder(newLadder: NewLadder): Observable<NewLadder>{
    return this.http.post<NewLadder>(this.baseLadderURL, newLadder);
  }

  addPlayerToLadder(ladderName: string, player:LadderPlayer): Observable<null> {
    return this.http.put<null>(this.baseLadderURL + ladderName + this.addPlayerURL, player);
  }

}
