import { Component } from '@angular/core';
import { NewPlayer } from '../_properties/newPlayer';
import { Router} from '@angular/router';
import { Player } from '../_properties/player';
import { SignupService } from '../_services/signupservice'
import {Output, ElementRef, EventEmitter} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { swipeAnimation } from '../_animations';

@Component({
  selector: 'signup',
  moduleId: module.id,
  styleUrls: ['./signup.css'],
  templateUrl: './signup.html',
  animations: [swipeAnimation],
  host: { '[@swipeAnimation]': '' },
  providers: [SignupService],
})

export class Signup {
    state: string;
    player: Player;

    username: string;
    password: string;
    passwordConfirm: string;
    firstname: string;
    lastname: string;
    email: string;
    emailConfirm: string;
    phoneNumber: string;

    usernameError: string;
    passwordError: string;
    passwordConfirmError: string;
    firstnameError: string;
    lastnameError: string;
    emailError: string;
    emailConfirmError: string;
    phoneNumberError: string;

    constructor(private signupService: SignupService, private router: Router) { }
  ngAfterInit(){
    this.state = 'init';
  }
  validateBefore(): boolean {
    let isValid = true;
    //this.validateUsername();
    if(!this.username ){
      isValid = false;
      this.usernameError = "för kort namn";
    }

    return isValid;
  }
  register() {
    this.validateBefore();
    let player = new NewPlayer(this.username, this.firstname, this.lastname, this.email, this.phoneNumber, this.password);
    console.log("försöker... ");
    let operation = this.signupService.signupPlayer(player);
    operation.subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    );
  }
  back(): void{
    this.router.navigate(['/home']);
  }

}
