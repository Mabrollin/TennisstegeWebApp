import { Component, Input } from '@angular/core';

@Component({
  selector: 'aboutProfilePanel',
  moduleId: module.id,
  styleUrls: ['./aboutprofilepanel.css'],
  templateUrl: './aboutprofilepanel.html',
})

export class AboutProfilePanel{
constructor() {
  this.editMode = false;
}

@Input()
private info: string;
editMode: boolean;
ngOnInit(){
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
