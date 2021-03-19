import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
    transition("home => *, alpha => beta, alpha => gamma, alpha => datalist, alpha => newHtml, beta => gamma, beta => datalist, beta => newHtml, gamma => datalist, gamma => newHtml, datalist => newHtml"
      , [
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

    transition("newHtml => *, datalist => gamma, datalist => beta, datalist => aplha, datalist => home, gamma => beta, gamma => alpha, gamma => home , beta => alpha, beta => home, alpha => home"
    , [
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