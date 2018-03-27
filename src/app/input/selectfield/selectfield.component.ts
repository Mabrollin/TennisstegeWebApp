import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'selectfield',
  moduleId: module.id,
  styleUrls: ['./selectfield.css'],
  templateUrl: './selectfield.html',
  animations: [
    trigger('label', [
      state('hasInput', style({
        opacity: 1,
        color: '#7f7f7f',
        transform: 'translateY(-15px) translateX(-10px) scale(0.8)'
      })),
      state('noInput', style({
      })),
      transition('*=>hasInput', [
        animate(200, keyframes([
          style({
            opacity: 1,
            transform: 'translateY(-7px) translateX(20px)',
            offset: 0.5
          }),
          style({
            opacity: 1,
            transform: 'translateY(-15px) scale(0.8)',
            offset: 1
          })
        ]))
      ]),


      transition('*=>noInput', [
        animate(200, keyframes([
          style({
            opacity: 1,
            transform: 'translateY(-7px) translateX(20px)',
            offset: 0.5
          }),
          style({
            opacity: 1,
            transform: 'translateY(0px)',
            offset: 1
          })
        ]))
      ])
    ])

  ],
})

export class SelectField {
  @Input() label: string;
  @Input() options: string[][];
  @Input() error: boolean;

  inputText: string;
  state: string = "notSelected";
  @Output("changeEvent")
  changeEvent: EventEmitter<string> = new EventEmitter<string>();

    private selectedOption;



  ngAfterInit(){
  }
  handleChange(): void {
    this.changeEvent.emit(this.selectedOption);
  }

}
