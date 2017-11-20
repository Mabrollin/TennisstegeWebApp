import { Component } from '@angular/core';
import { Router} from '@angular/router';
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
  selector: 'loginoptions',
  moduleId: module.id,
  styleUrls: ['./loginoptions.css'],
  templateUrl: './loginoptions.html',
  animations: [swipeAnimation],
  host: { '[@swipeAnimation]': '' },


})

export class LoginOptions{
constructor(private router: Router) { }
  navigate(route:string): void{
    this.router.navigate(['/'+route]);
  }
}
