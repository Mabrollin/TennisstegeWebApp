import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Record, Score } from '../../_properties';
import { trigger, state, animate, transition, style, keyframes, sequence } from '@angular/animations';
@Component({
  selector: 'scoringTable',
  moduleId: module.id,
  styleUrls: ['./scoringTable.css'],
  templateUrl: './scoringTable.html',
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
    ]),
  trigger('anim', [
    state('in', style({
    })),
    state('out',   style({
      overflow: 'hidden',
      opacity: '1',
      height: '0',
    })),
    transition('in => out', animate('200ms ease-in')),
    transition('out => in', animate('200ms ease-out'))
  ])
]
})

export class ScoringTable {

@Input()
  challengerPlayer: string;

  @Input()
  challengedPlayer: string;

  @Output("submitEvent")
  submitEvent: EventEmitter<Record> = new EventEmitter<Record>();

  games: (number|string)[][] = [];
  sets: number[] = [0, 0];
  duration: string;
  private nrOfGames = 6;

constructor(){
  this.games = [];
  for(var i = 0; i < this.nrOfGames; i++){
    this.games.push([0, 0, 'out']);
  }
}

  handleSetScoreChangeEvent(score: number[]): void{
    this.sets = score;
    let games = score[0] + score[1];
      for(var i = 0; i < games; i++){
        this.games[i][2] = 'in';
      }
      for(var i = games; i < this.nrOfGames; i++){
        this.games[i][2] = 'out';
      }
  }
  handleGameScoreChangeEvent(score: number[], game: (number|string)[]): void{
    game[0] = score[0];
    game[1] = score[1];
  }
  cancel(){
    this.submitEvent.emit(null);
  }
  submit() {
    let record: Record = new Record();
    let score: Score = new Score();
    let setsAndGames = [];
    setsAndGames.push(this.sets);
    this.games.forEach((game) => {
      let points = game.filter(
        <(x) => x is number>
        (x => typeof x == 'number')
      );
      setsAndGames.push(points);
    });

    score.setsAndGames = setsAndGames;
    record.score = score;
    record.matchOutcome = this.getOutcome();
    record.duration = this.duration;
    console.log(record);
    this.submitEvent.emit(record);

  }

  getOutcome(): string {
    return this.sets[0] > this.sets[1]? "challengerWon":
    this.sets[0] < this.sets[1]? "challengedWon":
    this.sets[0] == this.sets[1]? "draw": null;

  }

}
