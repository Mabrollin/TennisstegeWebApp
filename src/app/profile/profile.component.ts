import { Component } from '@angular/core';
import { UserInfoService } from '../_services/userinfoservice';

@Component({
  selector: 'profile',
  moduleId: module.id,
  styleUrls: ['./profile.css'],
  templateUrl: './profile.html',
  providers: [UserInfoService],
})

export class Profile{
constructor(private userInfoService: UserInfoService) { }
info : string;
  ngOnInit(){
    this.userInfoService.getContactInfo()
    .subscribe(
      res =>{
        console.log(res);
      },
      error =>{

      }
    );
  }
}
