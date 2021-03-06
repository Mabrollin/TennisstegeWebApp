import { Component, Input } from '@angular/core';
import { LadderParticipation } from '../../../_properties';

@Component({
  selector: 'ladderProfilePanel',
  moduleId: module.id,
  styleUrls: ['./ladderprofilepanel.css'],
  templateUrl: './ladderprofilepanel.html',
})

export class LadderProfilePanel{
constructor(){
  this.editMode = false;
}

@Input()
ladders: LadderParticipation[];

private editMode: boolean;

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
