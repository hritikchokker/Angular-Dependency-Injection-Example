import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StorageService } from "./storage.service";
import { CompWithStateComponent } from "./components/comp-with-state/comp-with-state.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, CompWithStateComponent],
  bootstrap: [AppComponent],
  providers: [StorageService]
})
export class AppModule {}
