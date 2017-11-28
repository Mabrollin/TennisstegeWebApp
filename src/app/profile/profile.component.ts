import { Component } from '@angular/core';
import { UserInfoService } from '../_services/userinfoservice';
import { User } from '../_properties/user';

@Component({
  selector: 'profile',
  moduleId: module.id,
  styleUrls: ['./profile.css'],
  templateUrl: './profile.html',
  providers: [UserInfoService],
})

export class Profile{
constructor(private userInfoService: UserInfoService) {
  this.user = new User();
  this.userInfoService.getContactInfo()
  .subscribe(
    (data: User) =>{
      this.user = data;
      console.log("parent: ")
      console.log(this.user);
    },
    error =>{
      console.log(error);
    }
  );
}
info : string;
username: string;
user: User;
  ngOnInit(){

  }
}
