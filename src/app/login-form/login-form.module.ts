import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    RouterModule.forChild([{ path: "", component: LoginFormComponent }]),
    ReactiveFormsModule
  ]
})
export class LoginFormModule {}
