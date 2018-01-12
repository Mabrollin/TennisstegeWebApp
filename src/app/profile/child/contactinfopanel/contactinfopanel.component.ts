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
private editInfo: ContactInfo;
firstName: string;
editMode: boolean;
ngOnInit(){
}
getInfo = () => {return this.editMode?this.editInfo: this.info};
startEdit(){
    this.editInfo = new ContactInfo();
      this.editInfo.firstName = this.info.firstName;
      this.editInfo.lastName = this.info.lastName;
      this.editInfo.email = this.info.email;
      this.editInfo.phoneNumber = this.info.phoneNumber;

  this.editMode = true;
}
update(){
  this.editMode = false;
  this.info = this.editInfo;
  console.log(this.editInfo);
  this.userInfoService.updateContactInfo(this.info).subscribe(
    (data) =>{
      console.log(data);
    },
    error =>{
      console.log(error);
    }
  );;
}
cancelEdit() {
  this.editMode = false;
}
isEditMode () {
  return this.editMode;
}

}
