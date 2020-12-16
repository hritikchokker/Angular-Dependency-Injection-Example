import { Component, VERSION, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // animations: [transitionTrigger]
})
export class AppComponent implements OnInit {
  custom: string;
  toggle: boolean = true;
  @HostBinding("@.disabled")
  public animationsDisabled = false;
  name = "Angular " + VERSION.major;
  constructor() {}
  ngOnInit() {}

  toggleFunc(): void {
    this.toggle = !this.toggle;
  }
}
