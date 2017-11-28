import { Component } from '@angular/core';
import { UserSessionService } from '../_services/usersessionservice';

@Component({
  selector: 'navbar',
  moduleId: module.id,
  styleUrls: ['./navbar.css'],
  templateUrl: './navbar.html',
})

export class Navbar{
  constructor(private userSessionService :UserSessionService){

  }
  hasLoggedInUser(): boolean{
    return this.userSessionService.hasActiveToken();
  }
}
