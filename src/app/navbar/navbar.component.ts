import { Component } from '@angular/core';
import { UserSessionService } from '../_services/usersessionservice';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

@Component({
  selector: 'navbar',
  moduleId: module.id,
  styleUrls: ['./navbar.css'],
  animations: [
        trigger('panelInOut', [
            transition('void => *', [
              animate(1200, keyframes([
                  style({opacity: 0, transform: 'translateX(-200px)', offset: 0}),
                  style({opacity: 0, transform: 'translateX(-200px)', offset: .5}),
                  style({opacity: 1, transform: 'translateX(25px)', offset: .875}),
                  style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
              ]))
            ]),
            transition('* => void', [
              animate(600, keyframes([
                style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                style({opacity: 1, transform: 'translateX(-25px)', offset: .25}),
                style({opacity: 0, transform: 'translateX(200px)', offset: 1}),
              ]))
            ])
        ])
    ],
  templateUrl: './navbar.html',
})

export class Navbar{
  constructor(private userSessionService :UserSessionService){

  }
  hasLoggedInUser(): boolean{
    return this.userSessionService.hasActiveToken();
  }
}
