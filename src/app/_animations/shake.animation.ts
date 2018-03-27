import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const shakeAnimation =

trigger('shake', [
  transition('* => shake', [
            animate(400, keyframes([
              style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                style({opacity: 1, transform: 'translateX(-15px)', offset: .1}),
                style({opacity: 1, transform: 'translateX(11px)', offset: .25}),
                style({opacity: 1, transform: 'translateX(-9px)', offset: .50}),
                style({opacity: 1, transform: 'translateX(7px)', offset: .75}),
                style({opacity: 1, transform: 'translateX(0)', offset: 1}),
            ]))
        ])
])
