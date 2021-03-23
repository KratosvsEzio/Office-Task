import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

const array = ['home', 'alpha', 'beta', 'gamma', 'datalist', 'newHtml', 'dropShadow', 'editor'];

const left2RightTriggerNames = () => {
  let trigger = '';
  array.forEach( (element, i) => {
    if(i === 0) {
      trigger += element + ' => *'
    } else {
      array.forEach( (to, j) => {
        if(j > i) {
          trigger += `, ${element} => ${to}`
        }
      })
    }
  });
  return trigger;
}

const right2LeftTriggerNames = () => {
  let trigger = '';
  array.reverse().forEach( (element, i) => {
    if(i === 0) {
      trigger += element + ' => *'
    } else {
      array.forEach( (to, j) => {
        if(j > i) {
          trigger += `, ${element} => ${to}`
        }
      })
    }
  });
  return trigger;
}

export const routeTransitionAnimations = trigger('triggerName', [
    // Animation From Left to Right
    transition(left2RightTriggerNames(), [
      style({ position: 'relative' }),
      query(':enter, :leave', [
          style({
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%'
          })
      ]),
      query(':enter', [style({ right: '-100%', opacity: 0 })]),
      query(':leave', animateChild()),
      group([
          query(':leave', [animate('200ms ease-out', style({ right: '100%', opacity: 0 }))]),
          query(':enter', [animate('200ms ease-out', style({ right: '0%', opacity: 1 }))])
      ]),
      query(':enter', animateChild())
    ]),
    // Animation From Right to Left
    transition(right2LeftTriggerNames(), [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({ left: '-100%', opacity: 0 })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))]),
        query(':enter', [animate('200ms ease-out', style({ left: '0%', opacity: 1 }))])
      ]),
      query(':enter', animateChild())
    ])
]);