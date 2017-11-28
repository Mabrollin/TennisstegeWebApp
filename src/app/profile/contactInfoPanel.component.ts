import { Component, Input } from '@angular/core';
import { UserInfoService } from '../_services/userinfoservice';
import { ContactInfo } from '../_properties/contactInfo';

@Component({
  selector: 'contactInfoPanel',
  moduleId: module.id,
  styleUrls: ['./contactInfoPanel.css'],
  templateUrl: './contactInfoPanel.html',
  providers: [UserInfoService],
})

export class ContactInfoPanel{
constructor(private userInfoService: UserInfoService) { }

@Input()
private info: ContactInfo;

ngOnInit(){
  console.log("child: ");
  console.log(this.info);
}

}
