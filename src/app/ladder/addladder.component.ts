import { Component } from '@angular/core';
import { LadderParticipation, User, LadderPlayer } from '../_properties';
import { LadderService, UserSessionService } from '../_services';
import { swipeAnimation } from '../_animations';

@Component({
  selector: 'addladder',
  moduleId: module.id,
  styleUrls: ['./addladder.css'],
  providers: [LadderService],
  templateUrl: './addladder.html',
  animations: [swipeAnimation],
  host: { '[@swipeAnimation]': '' },
})

export class AddLadder {
  private ladderName: string;

  constructor(private ladderService: LadderService, private userSessionService: UserSessionService) {
  }

  handleChangeLadderNameEvent(ladderName: string): void{
      this.ladderName = ladderName;
  }

  searchAndAdd() {
    let selfPlayer = new LadderPlayer(this.userSessionService.getCurrentUser(), 0, 0);
    console.log(this.ladderService.addPlayerToLadder(this.ladderName, selfPlayer).subscribe());
  }


}
