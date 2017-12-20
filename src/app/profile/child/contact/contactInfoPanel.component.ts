import { Component, Input } from '@angular/core';
import { UserInfoService } from '../../../_services/userinfoservice';
import { ContactInfo } from '../../../_properties';

@Component({
  selector: 'contactInfoPanel',
  moduleId: module.id,
  styleUrls: ['./contactinfopanel.css'],
  templateUrl: './contactinfopanel.html',
  providers: [UserInfoService],
})

export class ContactInfoPanel{
constructor(private userInfoService: UserInfoService) {
  this.editMode = false;
}

@Input()
private info: ContactInfo;
editMode: boolean;
ngOnInit(){
  console.log("child: ");
  console.log(this.info);
}
startEdit(){
  this.editMode = true;
}
update(){
  this.editMode = false;
}
isEditMode () {
  return this.editMode;
}

}
