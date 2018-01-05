import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const swipeAnimation =

trigger('swipeAnimation', [
  // end state styles for route container (host)
         state('*', style({
           position: 'absolute',
           transform: 'translate(-50%, -50%)'
         })),
  transition(':enter', [
            animate(1200, keyframes([
                style({opacity: 0, transform: 'translateY(-200px) translate(-50%, -50%)', offset: 0}),
                style({opacity: 0, transform: 'translateY(-200px) translate(-50%, -50%)', offset: .5}),
                style({opacity: 1, transform: 'translateY(25px) translate(-50%, -50%)', offset: .875}),
                style({opacity: 1, transform: 'translateY(0px) translate(-50%, -50%)', offset: 1}),
            ]))
        ]
      ),


  transition(':leave', [
            animate(600, keyframes([
              style({opacity: 1, transform: 'translateY(0) translate(-50%, -50%)', offset: 0}),
              style({opacity: 1, transform: 'translateY(-25px) translate(-50%, -50%)', offset: .25}),
              style({opacity: 0, transform: 'translateY(200px) translate(-50%, -50%)', offset: 1}),
            ]))
        ])
])
