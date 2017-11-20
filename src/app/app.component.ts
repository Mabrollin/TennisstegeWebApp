import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  styleUrls: ['./_styles/app.css'],
  templateUrl: './_templates/app.html',
})
export class AppComponent {
  constructor(public router: Router) { }
  title = 'app';
}
