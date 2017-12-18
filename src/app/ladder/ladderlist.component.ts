import { Component } from '@angular/core';
import { UserInfoService } from '../_services/userinfoservice';
import { LadderParticipation, User } from '../_properties';

import { swipeAnimation } from '../_animations';

@Component({
  selector: 'ladderlist',
  moduleId: module.id,
  styleUrls: ['./ladderlist.css'],
  providers: [UserInfoService],
  templateUrl: './ladderlist.html',
  animations: [swipeAnimation],
  host: { '[@swipeAnimation]': '' },
})

export class LadderList{
  private ladders: LadderParticipation[];
  constructor(private userInfoService: UserInfoService) {
    userInfoService.getContactInfo().
    subscribe(
      (data: User) =>{
        this.ladders = data.ladderParticipation;
      },
      error =>{
        console.log(error);
      }
    );
  }


}
