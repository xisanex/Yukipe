import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = {
  moveToRightLeft: trigger('moveToRightLeft', [
    state(
      'in',
      style({
        opacity: 1,
        left: 0,
      })
    ),
    state(
      'out',
      style({
        opacity: 0,
        left: '{{moveBy}}px',
      }),
      { params: { moveBy: '450' } }
    ),
    transition('in <=>out', animate('1s')),
  ]),

  opacityAnim2: trigger('opacityAnim', [
    state(
      'in',
      style({
        opacity: 0,
      })
    ),
    state(
      'out',
      style({
        opacity: 1,
      })
    ),
    transition('in<=>out', animate('1s')),
  ]),

  opacityAnim: trigger('opacityAnim', [
    state(
      'in',
      style({
        opacity: 0,
      })
    ),
    state(
      'out',
      style({
        opacity: 1,
      })
    ),
    transition('in<=>out', animate('1s')),
  ]),
  reverOpacityAnim: trigger('reveropacityAnim', [
    state(
      'in',
      style({
        opacity: 1,
      })
    ),
    state(
      'out',
      style({
        opacity: 0,
      })
    ),
    transition('in<=>out', animate('1s')),
  ]),
};
