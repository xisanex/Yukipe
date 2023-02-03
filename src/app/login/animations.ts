import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = {
  moveToRightLeft: trigger('moveToRightLeft', [
    state(
      'in',
      style({
        left: '{{startPoint}}px',
      }),
      { params: { startPoint: 0 } }
    ),
    state(
      'out',
      style({
        left: '{{moveBy}}px',
      }),
      { params: { moveBy: '650' } }
    ),
    transition('in <=>out', animate('{{time}}s linear')),
    
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
    transition('in<=>out', animate('1s 1s')),
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
