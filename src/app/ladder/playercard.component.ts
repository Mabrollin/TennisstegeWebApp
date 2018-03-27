import { Component, Output, Input, EventEmitter } from '@angular/core';
import { UserSessionService, LadderService, ShadowService, ChallengeService } from '../_services/';
import { ActivatedRoute } from '@angular/router';
import { LadderPlayer} from '../_properties/';


@Component({
  selector: 'playercard',
  moduleId: module.id,
  styleUrls: ['./playercard.css'],
  providers: [],
  templateUrl: './playercard.html',
})

export class PlayerCard{
  @Input()
  private player: LadderPlayer;
  @Input()
  private selfPlayer: boolean = false;
  @Output("issueChallenge")
  issueChallengeEvent: EventEmitter<String> = new EventEmitter<String>();

  issueChallenge(username: string){
    this.issueChallengeEvent.emit(username);
  }

}
