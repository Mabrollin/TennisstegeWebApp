import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewChallenge } from '../../_properties';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';
import { swipeAnimation } from '../../_animations';

@Component({
  selector: 'newChallengePopup',
  moduleId: module.id,
  styleUrls: ['./newchallengepopup.css'],
  providers: [],
  templateUrl: './newchallengepopup.html',
  animations: [
    trigger('swipeAnimation', [
      // end state styles for route container (host)

      transition(':enter', [

                animate(400, keyframes([
                    style({opacity: 0, transform: 'translateX(-200px)', offset: 0}),
                    style({opacity: 0, transform: 'translateX(-200px)', offset: .5}),
                    style({opacity: 1, transform: 'translateX(25px)', offset: .875}),
                    style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
                ]))
            ]
          ),


      transition(':leave', [
                animate(400, keyframes([
                  style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                  style({opacity: 1, transform: 'translateY(-25px)', offset: .25}),
                  style({opacity: 0, transform: 'translateY(200px)', offset: 1}),
                ]))
            ])
    ])
  ],
})

export class NewChallengePopup{
  @Input()
  challengedPlayer: string;
  @Output("submitEvent")
  submitEvent: EventEmitter<NewChallenge> = new EventEmitter<NewChallenge>();

  date: string;

  constructor() {
  }
cancel(){
  this.submitEvent.emit(null);
}
submit() {
  let newChallenge: NewChallenge = new NewChallenge();
  newChallenge.challengedPlayer = this.challengedPlayer;
  newChallenge.date = this.date;
  this.submitEvent.emit(newChallenge);
}

}
