import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../_services/loginservice';
import { HostBinding, ElementRef, EventEmitter} from '@angular/core';
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
  selector: 'login',

  moduleId: module.id,
  styleUrls: ['./login.css'],
  templateUrl: './login.html',
  animations: [
    shakeAnimation,
    swipeAnimation

  ],
  host: { '[@swipeAnimation]': '' },
  providers: [LoginService],

})

export class Login {
  usernameFieldErrorMessage: string = null;
  passwordFieldErrorMessage: string = null;
  state: string;

  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(){
  }
ngAfterInit(){
  this.state = 'init';
}

handleChangeUsernameEvent(username: string): void{
    this.username = username;
}
handleChangePasswordEvent(password: string): void{
    this.password = password;
}
  login(username: string, password: string): void {

this.usernameFieldErrorMessage = null;
this.passwordFieldErrorMessage = null;


    this.loginService.login(username, password).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/profile']);
        }
        else {
          this.passwordFieldErrorMessage = 'fel användarnamn eller lösenord';
          this.state = 'shake';
        }
      },
      error => {
        console.log(error);
        //this.errorMessage = 'serverfel';
        this.state = 'shake';

      }
    );
  }
  hasUsernameError(): boolean{
    return !!this.usernameFieldErrorMessage;
  }
  hasPasswordError(): boolean{
  return !!this.passwordFieldErrorMessage;
  }
  back(): void{
    this.router.navigate(['/options']);
  }

}
