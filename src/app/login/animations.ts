import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = {
  animTrigger: trigger('animTrigger', [
    state('in', style({ top: 0, left: 0, opacity: 1 })),
    state('out', style({ top: 0, left: '450px', opacity: 0 })),
    transition('in =>out', [animate('1s')]),
    transition('out => in', [animate('0.5s')]),
  ]),
  animFormTrigger: trigger('animFormTrigger', [
    state('in', style({ top: 0, left: '350px' })),
    state('out', style({ top: 0, left: 0, opacity: 0 })),
    transition('in =>out', [animate('1s')]),
    transition('out => in', [animate('0.5s')]),
  ]),
  animSwipe: trigger('animSwipe', [
    state('in', style({ opacity: 0 })),
    state('out', style({ opacity: 1 })),
    transition('in =>out', [animate('1s')]),
    transition('out => in', [animate('0.5s')]),
  ]),
};
