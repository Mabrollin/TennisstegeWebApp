import { Component, OnInit } from '@angular/core';
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

declare var window: any;
declare var FB: any;

@Component({
  selector: 'loginoptions',
  moduleId: module.id,
  styleUrls: ['./loginoptions.css'],
  templateUrl: './loginoptions.html',
  animations: [swipeAnimation],
  host: { '[@swipeAnimation]': '' },


})

export class LoginOptions implements OnInit {
  constructor(private router: Router) {
    // This function initializes the FB variable
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = () => {
      console.log("fbasyncinit")

      FB.init({
        appId: '194186294509177',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.12'
      });
      FB.AppEvents.logPageView();
      // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in

      FB.Event.subscribe('auth.statusChange', (response => {

        if (response.status === 'connected') {
          console.log(response);
          FB.api('/me', function(response) {
            console.log(response);
              console.log('Good to see you, ' + response.name + '.');
          });
        }

      }));
    };
  }

  navigate(route: string): void {
    this.router.navigate(['/' + route]);
  }

  ngOnInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }



  }

}
