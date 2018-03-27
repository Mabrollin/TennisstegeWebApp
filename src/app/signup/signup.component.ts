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
import { swipeAnimation, shakeAnimation } from '../_animations';

@Component({
  selector: 'signup',
  moduleId: module.id,
  styleUrls: ['./signup.css'],
  templateUrl: './signup.html',
  animations: [swipeAnimation, shakeAnimation],
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

  private emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private phoneNumberRegex = /^07([0-9][ -]*){7}[0-9]$/;

  usernameFieldErrorMessage: string;
  passwordFieldErrorMessage: string;
  passwordConfirmFieldErrorMessage: string;
  firstnameFieldErrorMessage: string;
  lastnameFieldErrorMessage: string;
  emailFieldErrorMessage: string;
  emailConfirmFieldErrorMessage: string;
  phoneNumberFieldErrorMessage: string;

  constructor(private signupService: SignupService, private router: Router) { }
  ngAfterInit() {
    this.state = 'init';
  }
  validateBefore(): boolean {
    let isValid = true;
    //this.validateUsername();
    isValid = isValid && this.validateUsername();
    isValid = isValid && this.validateName();
    isValid = isValid && this.validateEmail();
    isValid = isValid && this.validatePhoneNumber();
    isValid = isValid && this.validatePassword();
    return isValid;
  }
  validateUsername() {
    if(!this.username || this.username.length == 0){
      this.usernameFieldErrorMessage = "Fyll i användarnamn";
      return false;
    }
    else if(this.username.length < 6){
      this.usernameFieldErrorMessage = "För kort användarnamn";
      return false;
    }
    else if(this.username.length > 32){
      this.usernameFieldErrorMessage = "För långt användarnamn";
      return false;
    }
    else {
      this.usernameFieldErrorMessage = null;
      return true;
    }
  }
  validateName() {
    this.firstnameFieldErrorMessage = null;
    this.lastnameFieldErrorMessage = null;
    if(!this.firstName || this.firstName.length == 0){
      this.firstnameFieldErrorMessage = "Fyll i förnamn";
      return false;
    }
    else if(this.firstName.length > 32){
      this.firstnameFieldErrorMessage = "För långt förnamn";
      return false;
    }
    else if(!this.lastName || this.lastName.length == 0){
      this.lastnameFieldErrorMessage = "Fyll i efternamn";
      return false;
    }
    else if(this.lastName.length > 32){
      this.lastnameFieldErrorMessage = "För långt efternamn";
      return false;
    }
    else {
      return true;
    }
  }
  validateEmail() {
  this.emailFieldErrorMessage = null;
  this.emailConfirmFieldErrorMessage = null;
  if (!this.email || this.email.length == 0) {
    this.emailFieldErrorMessage = "Fyll i din email";
    return false;
  }
  else if (!this.emailRegex.test(this.email)) {
    this.emailFieldErrorMessage = "Ogiltig email";
    return false;
  }
  else if (!this.emailConfirm || this.emailConfirm.length == 0) {
    this.emailConfirmFieldErrorMessage = "Bekräfta din email";
    return false;
  }
  else if (!(this.email === this.emailConfirm)) {
    this.emailConfirmFieldErrorMessage = "Skriv samma email";
    return false;
  }
  else {
    return true;
  }

  }

  validatePhoneNumber() {
    let isValid = this.phoneNumber && this.phoneNumberRegex.test(this.phoneNumber);
    //if(!isValid)
    return isValid;
  }
  validatePassword() {
    let isValid = this.password && this.password.length >= 6 && this.password.length <= 32 && this.passwordConfirm && this.password === this.passwordConfirm;
    //if(!isValid)
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
    if(this.validateBefore()){
      let player = new NewPlayer(this.username, this.firstName, this.lastName, this.email, this.phoneNumber, this.password, this.passwordConfirm);
      let operation = this.signupService.signupPlayer(player);
      operation.subscribe(
        res => {
          if(player.equals(res)){
              alert(res.toString());
              this.router.navigate(['/login']);
          }
          else {
            alert(res.toString());
          }

        },
        error => {
          alert(error);
          this.router.navigate(['/options']);
        }
      );
    }
    else {
      this.state = 'shake'
    }

  }
  back(): void {
    this.router.navigate(['/options']);
  }

}
