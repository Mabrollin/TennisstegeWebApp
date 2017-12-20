import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gameScore',
  moduleId: module.id,
  styleUrls: ['./gamescore.css'],
  templateUrl: './gamescore.html',
  animations: [
    trigger('shake', [
      transition('issueLeft => shake', [
                animate(400, keyframes([
                  style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(-5px)', offset: .1}),
                    style({opacity: 1, transform: 'translateX(3px)', offset: .25}),
                    style({opacity: 1, transform: 'translateX(-2px)', offset: .50}),
                    style({opacity: 1, transform: 'translateX(1px)', offset: .75}),
                    style({opacity: 1, transform: 'translateX(0)', offset: 1}),
                ]))
            ]),
            transition('issueRight => shake', [
                      animate(400, keyframes([
                        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                          style({opacity: 1, transform: 'translateX(5px)', offset: .1}),
                          style({opacity: 1, transform: 'translateX(-3px)', offset: .25}),
                          style({opacity: 1, transform: 'translateX(2px)', offset: .50}),
                          style({opacity: 1, transform: 'translateX(-1px)', offset: .75}),
                          style({opacity: 1, transform: 'translateX(0)', offset: 1}),
                      ]))
                  ])
    ]),
  trigger('ballSide', [
    state('right', style({
      transform: 'translateX(200%)'
    })),
    state('left',   style({
    })),
    transition('right <=> left', animate('100ms ease-in'))
  ]),
  trigger('ballState', [
    state('inactive', style({
      backgroundColor: 'gray'
    })),
    state('active',   style({
    })),
    transition('inactive <=> active', animate('100ms ease-in'))
  ])
]

})
export class GameScore {
  @Input()
  gameType: string;

  @Input()
  maxPoints: number;

  @Output("scoreChangeEvent")
  scoreChangeEvent: EventEmitter<number[]> = new EventEmitter<number[]>();

  leftShakeState: string;
  rightShakeState: string;

  leftHandPoints: number = 0;
  rightHandPoints: number = 0;

  balls: number[];

  constructor(){}
  ngOnInit() {
    if(!this.maxPoints)
      this.maxPoints = this.gameType === "game" ? 6: this.gameType === "set" ? 3: 0;
    this.leftShakeState='init';
    this.rightShakeState='init';
    this.balls = [];
    for(var i = 0; i<this.maxPoints; i++){
      this.balls.push(i);
    }
  }

  getMaxPoints() : number{
    return this.gameType === "game" ? 6 : this.maxPoints;
  }

  increaseLeft() {

    if(this.leftHandPoints < this.maxPoints){
      this.leftHandPoints++;
      this.leftShakeState = 'issueLeft';
      this.scoreChangeEvent.emit([this.leftHandPoints, this.rightHandPoints]);
      }
  }
  decreaseLeft() {
    if(this.leftHandPoints > 0){
      this.leftHandPoints--;
      this.leftShakeState = 'issueRight';
      this.scoreChangeEvent.emit([this.leftHandPoints, this.rightHandPoints]);
      }
  }
  increaseRight() {
    if(this.rightHandPoints < this.maxPoints){
      this.rightHandPoints++;
      this.rightShakeState = 'issueRight';
      this.scoreChangeEvent.emit([this.leftHandPoints, this.rightHandPoints]);
      }
  }
  decreaseRight() {
    if(this.rightHandPoints > 0){
      this.rightHandPoints--;
      this.rightShakeState = 'issueLeft';
      this.scoreChangeEvent.emit([this.leftHandPoints, this.rightHandPoints]);
      }
  }
  getLeftState(index: number): string  {
    if(index +1 <= this.leftHandPoints){
      return "active";
    }
    else {
      return "inactive";
    }
  }
  getRightState(index: number): string  {
    if(index + 1 <= this.rightHandPoints){
      return "active";
    }
    else {
      return "inactive";
    }
  }
  getRightSide(index: number): string  {
    if(index + 1 <= this.rightHandPoints){
      return "right";
    }
    else {
      return "left";
    }
  }
  getLeftSide(index: number): string  {
    if(index + 1 <= this.leftHandPoints){
      return "left";
    }
    else {
      return "right";
    }
  }

}
