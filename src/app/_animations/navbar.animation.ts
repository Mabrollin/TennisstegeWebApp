import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const navbarAnimation =

trigger('navbarAnimation', [
  state('*', style({
    position: 'fixed'
  })),
  transition(':enter', [
            animate(1200, keyframes([
                style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
                style({opacity: 0, transform: 'translateY(-100px)', offset: .5}),
                style({opacity: 1, transform: 'translateY(10px)', offset: .875}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
            ]))
        ]
      ),


  transition(':leave', [
            animate(600, keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: 1, transform: 'translateY(10px)', offset: .25}),
              style({opacity: 0, transform: 'translateY(-100px)', offset: 1}),
            ]))
        ])
])
