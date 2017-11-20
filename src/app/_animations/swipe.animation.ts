import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const swipeAnimation =

trigger('swipeAnimation', [
  // end state styles for route container (host)
         state('*', style({
             // the view covers the whole screen with a semi tranparent background
             position: 'absolute'
         })),
  transition(':enter', [

            animate(1200, keyframes([
                style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                style({opacity: 0, transform: 'translateY(-200px)', offset: .5}),
                style({opacity: 1, transform: 'translateY(25px)', offset: .875}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
            ]))
        ]
      ),


  transition(':leave', [
            animate(600, keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: 1, transform: 'translateY(-25px)', offset: .25}),
              style({opacity: 0, transform: 'translateY(200px)', offset: 1}),
            ]))
        ])
])
