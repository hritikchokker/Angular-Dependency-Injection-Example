import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  group,
  stagger,
  animateChild,
  animation,
  query,
  transition
  // ...
} from "@angular/animations";

export const openCloseTrigger = trigger("openClose", [
  state(
    "open",
    style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })
  ),
  state(
    "closed",
    style({
      height: "100px",
      opacity: 0.9,
      backgroundColor: "green"
    })
  ),
  transition("open => closed", [animate("1s")]),
  transition("closed => open", [animate("1s")])
]);

/**
 * @description
 * alternate transition properties that can be used instead of the defined transition in openCloseAnimation trigger
 */
//  transition('* => closed', [
//       animate('1s')
//     ]),
//     transition('* => open', [
//       animate('0.5s')
//     ]),

// transition('open <=> closed', [
//   animate('0.5s')
// ]),

export const transitionTrigger = trigger("openClose", [
  state(
    "open",
    style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })
  ),
  state(
    "closed",
    style({
      height: "100px",
      opacity: 0.5,
      backgroundColor: "green"
    })
  ),
  transition("open => closed", [animate("1s")]),
  transition("closed => open", [animate("0.5s")]),
  transition("* => closed", [animate("1s")]),
  transition("* => open", [animate("0.5s")]),
  transition("open <=> closed", [animate("0.5s")]),
  transition("* => open", [animate("1s", style({ opacity: "*" }))]),
  transition("* => *", [animate("1s")])
]);

export const flyInOutTrigger = trigger("flyInOut", [
  state("in", style({ transform: "translateX(0)" })),
  transition("void => *", [
    style({ transform: "translateX(-100%)" }),
    animate(100)
  ]),
  transition("* => void", [
    animate(100, style({ transform: "translateX(100%)" }))
  ])
]);

export const insertRemoveTrigger = trigger("myInsertRemoveTrigger", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("100ms", style({ opacity: 1 }))
  ]),
  transition(":leave", [animate("100ms", style({ opacity: 0 }))])
]);

// Note that this example doesn't need to use state().

// :increment and :decrement in transitions

export const filterAnimationTrigger = trigger("filterAnimation", [
  transition(":enter, * => 0, * => -1", []),
  transition(":increment", [
    query(
      ":enter",
      [
        style({ opacity: 0, width: "0px" }),
        stagger(50, [
          animate("300ms ease-out", style({ opacity: 1, width: "*" }))
        ])
      ],
      { optional: true }
    )
  ]),
  transition(":decrement", [
    query(":leave", [
      stagger(50, [
        animate("300ms ease-out", style({ opacity: 0, width: "0px" }))
      ])
    ])
  ])
]);

// transition('* => active', [
//   animate('2s', keyframes([
//     style({ backgroundColor: 'blue' }),
//     style({ backgroundColor: 'red' }),
//     style({ backgroundColor: 'orange' })
//   ]))

// transition('* => active', [
//   animate('2s', keyframes([
//     style({ backgroundColor: 'blue', offset: 0}),
//     style({ backgroundColor: 'red', offset: 0.8}),
//     style({ backgroundColor: 'orange', offset: 1.0})
//   ])),
// ]),
// transition('* => inactive', [
//   animate('2s', keyframes([
//     style({ backgroundColor: 'orange', offset: 0}),
//     style({ backgroundColor: 'red', offset: 0.2}),
//     style({ backgroundColor: 'blue', offset: 1.0})
//   ]))
// ]),

export const advancedOpenCloseTrigger = trigger("openClose", [
  state(
    "open",
    style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })
  ),
  state(
    "close",
    style({
      height: "100px",
      opacity: 0.5,
      backgroundColor: "green"
    })
  ),
  // ...
  transition("* => *", [
    animate(
      "1s",
      keyframes([
        style({ opacity: 0.1, offset: 0.1 }),
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 })
      ])
    )
  ])
]);

export const shrinkOutTrigger = trigger("shrinkOut", [
  state("in", style({ height: "*" })),
  transition("* => void", [
    style({ height: "*" }),
    animate(250, style({ height: 0 }))
  ])
]);

export const pageAnimationTrigger = trigger("pageAnimations", [
  transition(":enter", [
    query(".hero, form", [
      style({ opacity: 0, transform: "translateY(-100px)" }),
      stagger(-30, [
        animate(
          "500ms cubic-bezier(0.35, 0, 0.25, 1)",
          style({ opacity: 1, transform: "none" })
        )
      ])
    ])
  ])
]);

export const flyInOutGroupTrigger = trigger("flyInOut", [
  state(
    "in",
    style({
      width: 120,
      transform: "translateX(0)",
      opacity: 1
    })
  ),
  transition("void => *", [
    style({ width: 10, transform: "translateX(50px)", opacity: 0 }),
    group([
      animate(
        "0.3s 0.1s ease",
        style({
          transform: "translateX(0)",
          width: 120
        })
      ),
      animate(
        "0.3s ease",
        style({
          opacity: 1
        })
      )
    ])
  ]),
  transition("* => void", [
    group([
      animate(
        "0.3s ease",
        style({
          transform: "translateX(50px)",
          width: 10
        })
      ),
      animate(
        "0.3s 0.2s ease",
        style({
          opacity: 0
        })
      )
    ])
  ])
]);

export const filterAnimationComplexTrigger = trigger("filterAnimation", [
  transition(":enter, * => 0, * => -1", []),
  transition(":increment", [
    query(
      ":enter",
      [
        style({ opacity: 0, width: "0px" }),
        stagger(50, [
          animate("300ms ease-out", style({ opacity: 1, width: "*" }))
        ])
      ],
      { optional: true }
    )
  ]),
  transition(":decrement", [
    query(":leave", [
      stagger(50, [
        animate("300ms ease-out", style({ opacity: 0, width: "0px" }))
      ])
    ])
  ])
]);

export const transAnimation = animation([
  style({
    height: "{{ height }}",
    opacity: "{{ opacity }}",
    backgroundColor: "{{ backgroundColor }}"
  }),
  animate("{{ time }}")
]);

//  transition('open => closed', [
//         useAnimation(transAnimation, {
//           params: {
//             height: 0,
//             opacity: 1,
//             backgroundColor: 'red',
//             time: '1s'
//           }
//         })

export const slideInAnimation = trigger("routeAnimations", [
  transition("HomePage <=> AboutPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* <=> FilterPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("200ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);

// query(':enter', [
//     style({ left: '-100%' })
//   ]),
//   query(':leave', animateChild()),
//   group([
//     query(':leave', [
//       animate('300ms ease-out', style({ left: '100%' }))
//     ]),
//     query(':enter', [
//       animate('300ms ease-out', style({ left: '0%' }))
//     ])
//   ]),
//   query(':enter', animateChild()),
// ]),
// transition('* <=> FilterPage', [
//   style({ position: 'relative' }),
//   query(':enter, :leave', [
//     style({
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%'
//     })
//   ]),
//   query(':enter', [
//     style({ left: '-100%' })
//   ]),
//   query(':leave', animateChild()),
//   group([
//     query(':leave', [
//       animate('200ms ease-out', style({ left: '100%' }))
//     ]),
//     query(':enter', [
//       animate('300ms ease-out', style({ left: '0%' }))
//     ])
//   ]),
//   query(':enter', animateChild()),
// ])

// export const routeAnimationTrigger =trigger('routeAnimations', [
// transition('HomePage <=> AboutPage', [
//   style({ position: 'relative' }),
//   query(':enter, :leave', [
//     style({
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%'
//     })
//   ])
// ])
