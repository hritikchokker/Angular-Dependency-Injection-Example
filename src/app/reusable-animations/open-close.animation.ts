import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from "@angular/animations";

export const openCloseAnimation = trigger("openClose", [
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

export const transitionTriggersExample = trigger("openClose", [
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
