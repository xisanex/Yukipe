import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const Animations = {
  animTrigger: trigger('animTrigger', [
    state(
      'in',
      style({
        left: 0,
        opacity: 1,
      })
    ),
    state(
      'out',
      style({
        left: '450px',
        opacity: 0,
      })
    ),
    transition('in=>out', [
      animate(
        '1s',
        keyframes([
          style({
            top: 0,
          }),
          style({
            top: 0,
            left: '200px',
            color: 'transparent',
          }),
          style({
            top: 0,
            left: '450px',
            opacity: 0,
          }),
        ])
      ),
    ]),
    transition('out=>in', [
      animate(
        '1s',
        keyframes([
          style({
            top: 0,
            left: '450px',
            opacity: 0,
          }),
          style({
            top: 0,
            left: '200px',
            color: 'transparent',
          }),
          style({
            top: 0,
            left: 0,
            opacity: 1,
          }),
        ])
      ),
    ]),
  ]),

  animSwipe: trigger('animSwipe', [
    state(
      'in',
      style({
        right: 0,
        opacity: 0,
      })
    ),
    state(
      'out',
      style({
        right: '450px',
        opacity: 1,
      })
    ),
    transition('in=>out', [
      animate(
        '1s',
        keyframes([
          style({
            top: 0,
          }),
          style({
            top: 0,
            left: '200px',
            color: 'transparent',
          }),
          style({
            top: 0,
            left: '450px',
            opacity: 0,
          }),
        ])
      ),
    ]),
    transition('out=>in', [
      animate(
        '1s',
        keyframes([
          style({
            top: 0,
            left: '450px',
            opacity: 0,
          }),
          style({
            top: 0,
            left: '200px',
            color: 'transparent',
          }),
          style({
            top: 0,
            left: 0,
            opacity: 1,
          }),
        ])
      ),
    ]),
    // state(
    //   'in',
    //   style({
    //     opacity: 0,
    //   })
    // ),
    // state(
    //   'out',
    //   style({
    //     opacity: 1,
    //   })
    // ),
    // transition('in =>out', [animate('1s')]),
    // transition('out => in', [animate('1s')]),
  ]),

  animFormTrigger: trigger('animFormTrigger', [
    state(
      'in',
      style({
        right: 0,
        opacity:1
      })
    ),
    state(
      'out',
      style({
        right: '350px',
        opacity: 0,
      })
    ),
    transition('in =>out', [animate('1s')]),
    transition('out => in', [animate('1s')]),
  ]),

  animFormTrigger2: trigger('animFormTrigger2', [
    state(
      'in',
      style({
        top: 0,
        opacity: 0,
        left: 0,
      })
    ),
    state(
      'out',
      style({
        top: 0,
        left: '350px',
        opacity: 1,
      })
    ),
    transition('in =>out', [animate('1s')]),
    transition('out => in', [animate('1s')]),
  ]),
};
