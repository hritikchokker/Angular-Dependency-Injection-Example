import { NgModule } from "@angular/core";
import { AnimationExampleComponent } from "./animation-example.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AnimationExampleComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: AnimationExampleComponent }])
  ]
})
export class AnimationExampleModule {}
