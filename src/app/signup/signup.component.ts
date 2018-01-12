import { Component } from '@angular/core';
import { NewPlayer } from '../_properties';
import { Router} from '@angular/router';
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

  username: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
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
  ngAfterInit() {
    this.state = 'init';
  }
  validateBefore(): boolean {
    let isValid = true;
    //this.validateUsername();
    if (!this.username) {
      isValid = false;
      this.usernameError = "för kort namn";
    }

    return isValid;
  }
  handleChangeUsernameEvent(username: string): void{
      this.username = username;
  }
  handleChangePasswordEvent(password: string): void{
      this.password = password;
  }
  handleChangePasswordConfirmEvent(password: string): void{
      this.passwordConfirm = password;
  }
  handleChangeFirstnameEvent(firstName: string): void{
      this.firstName = firstName;
  }
  handleChangeLastnameEvent(lastName: string): void{
      this.lastName = lastName;
  }
  handleChangeEmailEvent(email: string): void{
      this.email = email;
  }
  handleChangeEmailConfirmEvent(email: string): void{
      this.emailConfirm = email;
  }
  handleChangePhoneEvent(phoneNumber: string): void{
      this.phoneNumber = phoneNumber;
  }
  register() {
    this.validateBefore();
    let player = new NewPlayer(this.username, this.firstName, this.lastName, this.email, this.phoneNumber, this.password);
    let operation = this.signupService.signupPlayer(player);
    operation.subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error)
        this.router.navigate(['/options']);
      }
    );
  }
  back(): void {
    this.router.navigate(['/options']);
  }

}
