import { Component } from "@angular/core";
// import { openCloseAnimation } from "../reusable-animations/custon.animation";

@Component({
  selector: "app-animation-example",
  templateUrl: "./animation-example.component.html",
  styleUrls: ["./animation-example.component.css"]
  // animations: [openCloseAnimation]
})
export class AnimationExampleComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
