import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInFadeOut = trigger('triggerFadeInOut', [
  state('fadein', style({
    opacity: 1,
  })),
  state('fadeout', style({
    opacity: 0,
  })),
  transition('fadein => fadeout', [
    animate('1s')
  ]),
  transition('fadeout => fadein', [
    animate('1s')
  ]),
]);
