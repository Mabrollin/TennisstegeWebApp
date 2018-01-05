import { Component, OnInit } from '@angular/core';
import { UserSessionService, LadderService, ShadowService, ChallengeService } from '../_services/';
import { ActivatedRoute } from '@angular/router';
import { LadderRepresentation, Challenge, NewChallenge, Record} from '../_properties/';
import { swipeAnimation } from '../_animations';


@Component({
  selector: 'ladder',
  moduleId: module.id,
  styleUrls: ['./ladder.css'],
  providers: [LadderService, ChallengeService],
  templateUrl: './ladder.html',
  animations: [swipeAnimation,
  ],
  host: { '[@swipeAnimation]': '' },
})

export class Ladder implements OnInit {
  private ladder: LadderRepresentation;
  private sub: any;
  challengedPlayer: string;
  recordChallenge: Challenge;

  constructor(private challengeService: ChallengeService, private shadowService: ShadowService, private ladderService: LadderService, private userSessionService: UserSessionService, private route: ActivatedRoute) {
    this.ladder = new LadderRepresentation();
  }

  ngOnInit() {
    this.loadLadderRepresentation();
  }

loadLadderRepresentation() {
  this.sub = this.route.params.subscribe(params => {
    let ladderName = params['name']; // (+) converts string 'id' to a number
    this.ladderService.getLadder(ladderName).
      subscribe(
      (data: LadderRepresentation) => {
        this.ladder = data;
      },
      error => {
        console.log(error);
      }
      );
  });
}
  isLoggedInPlayer(player: string): boolean {
    return this.userSessionService.getCurrentUser() === player;
  }

  getLoggedInPlayersChallenges(): Challenge[] {
    return this.ladder.challenges.filter(
      challenge => {
        return this.isLoggedInPlayer(challenge.challengerPlayerName) || this.isLoggedInPlayer(challenge.challengedPlayerName)
      }
    );
  }

  issueChallenge(challengedPlayer: string){
    this.shadowService.setShadow(true);
    this.challengedPlayer = challengedPlayer;
  }
  handleSubmitNewChallengeEvent(challenge: NewChallenge) {
    this.challengedPlayer = undefined;
    this.shadowService.setShadow(false);



if(challenge != null){
  challenge.ladder = this.ladder.ladderName;
  challenge.challengerPlayer = this.userSessionService.getCurrentUser();
  this.challengeService.newChallenge(challenge).
  subscribe(
  (data) => {
    console.log(data);
    this.loadLadderRepresentation();
  },
  error => {
    console.log(error);
  }
  );
}


  }
  issueRecordMatch(challenge: Challenge){
    this.shadowService.setShadow(true);
    this.recordChallenge = challenge;
  }
  handleSubmitRecordEvent(record: Record) {
    this.shadowService.setShadow(false);

    if(record != null){
      this.challengeService.record(this.recordChallenge.id, record).
      subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
      );
    }


    this.recordChallenge = undefined;
  }
}
