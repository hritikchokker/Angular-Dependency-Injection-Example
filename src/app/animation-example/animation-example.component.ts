import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  stagger,
  query,
  transition
  // ...
} from "@angular/animations";

interface AnimationEvent {
  fromState: string;
  toState: string;
  totalTime: number;
  phaseName: string;
  element: any;
  triggerName: string;
  disabled: boolean;
}

@Component({
  selector: "app-animation-example",
  templateUrl: "./animation-example.component.html",
  styleUrls: ["./animation-example.component.css"],
  animations: [
    trigger("openClose", [
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
    ])
  ]
})
export class AnimationExampleComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
