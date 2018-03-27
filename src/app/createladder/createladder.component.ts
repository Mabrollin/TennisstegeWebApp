import { Component } from '@angular/core';
import { NewLadder } from '../_properties';
import { Router} from '@angular/router';
import { LadderService, UserSessionService} from '../_services/';
import {Output, ElementRef, EventEmitter} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { swipeAnimation, shakeAnimation } from '../_animations';

@Component({
  selector: 'createladder',
  moduleId: module.id,
  styleUrls: ['./createladder.css'],
  templateUrl: './createladder.html',
  animations: [swipeAnimation, shakeAnimation],
  host: { '[@swipeAnimation]': '' },
  providers: [LadderService],
})

export class CreateLadder {
  state: string;

  ladderTypeOptions: string[][] = [["Rak Stege", "POSITION"], ["Pyramid", "POSITION"], ["Ranking", "RATING"]];
  visabilityOptions: string[][] = [["Alla", "PUBLIC"], ["Bara medlemmar", "PRIVATE"]];
  joinabilityOptions: string[][] = [["Inbjudan från medlemmar", "BY_MEMBER_INVITE"], ["Inbjudan från admin", "BY_ADMIN_INVITE"], ["Fri anslutning", "PUBLIC"]];

  ladderName: string;
  ladderType: string;
  visability: string;
  joinability: string;

  ladderNameFieldError: string;
  ladderTypeError: boolean;
  visabilityError: boolean;
  joinabilityError: boolean;

  constructor(private laddderService: LadderService, private userSessionService: UserSessionService, private router: Router) { }
  ngAfterInit() {
    this.state = 'init';
  }
  validateBefore(): boolean {
    return this.validateName()
    && this.validateLadderType()
    && this.validateVisability()
    && this.validateJoinability();
  }
  validateName() {
    if(!this.ladderName || this.ladderName.length == 0){
        this.ladderNameFieldError = "Fyll i namn för stegen";
        return false;
    }
    else if (this.ladderName.length < 6){
      this.ladderNameFieldError = "Stegnamnet är för kort";
      return false;
    }
    else if (this.ladderName.length > 32){
      this.ladderNameFieldError = "Stegnamnet är för långt";
      return false;
    }
    else {
      this.ladderNameFieldError = null;
      return true;
    }
  }
  validateLadderType(): boolean {
      this.ladderTypeError = !this.ladderType;
      return !this.ladderTypeError;
  }
  validateVisability(): boolean {
      this.visabilityError = !this.visability;
      return !this.visabilityError;
  }
  validateJoinability(): boolean {
      this.joinabilityError = !this.joinability;
      return !this.joinabilityError;
  }
  handleChangeLadderNameEvent(ladderName: string): void{
      this.ladderName = ladderName;
  }
  handleChangeLadderTypeEvent(ladderType: string): void{
      this.ladderType = ladderType;
  }
  handleChangeJoinabilityEvent(joinability: string): void{
      this.joinability = joinability;
  }
  handleChangeVisabilityEvent(visability: string): void{
      this.visability = visability;
  }

  register() {
    if(this.validateBefore()){
      let newLadder: NewLadder = new NewLadder(this.ladderName, this.userSessionService.getCurrentUser(), this.ladderType, this.visability, this.joinability);
      this.laddderService.createLadder(newLadder).subscribe(
        res => {
          if(newLadder.equals(res)){
              alert(res.toString());
              this.router.navigate(['/ladders']);
          }
          else {
            alert(res.toString());
          }

        },
        error => {
          alert(error);
          this.router.navigate(['/options']);
        }
      );;
      this.router.navigate(['/home']);
    }
    else
      this.state = 'shake';
  }
  back(): void {
    this.router.navigate(['/options']);
  }

}
