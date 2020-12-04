import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StorageService, UserModel } from "../../storage.service";

@Component({
  selector: "app-comp-with-state",
  templateUrl: "./comp-with-state.component.html",
  styleUrls: ["./comp-with-state.component.css"]
})
export class CompWithStateComponent implements OnInit, AfterViewInit {
  userBasicDetailsForm: FormGroup;
  constructor(private _fb: FormBuilder, public _storage: StorageService) {
    this.createForm();
  }

  get f() {
    return this.userBasicDetailsForm.controls;
  }

  createForm(): void {
    this.userBasicDetailsForm = this._fb.group({
      shortName: [null, [Validators.required]],
      location: [null, [Validators.required]],
      highestDegree: [null, Validators.required],
      fullName: [null, [Validators.required]]
    });
  }

  ngAfterViewInit() {
    if (this._storage.userBasicDetails) {
      this.userBasicDetailsForm.patchValue({
        ...this._storage.userBasicDetails
      });
    }
  }

  onSubmit() {
    this.checkValidations();
    if (this.userBasicDetailsForm.valid) {
      const payload: UserModel = { ...this.userBasicDetailsForm.value };
      this._storage.userBasicDetails = payload;
    }
  }

  checkValidations() {
    if (
      this.f["shortName"].hasError("required") ||
      this.f["shortName"].invalid
    ) {
      this.f["shortName"].markAsDirty();
      this.f["shortName"].markAsTouched();
      this.f["shortName"].setErrors({
        required: true
      });
      // return;
    }
    if (this.f["fullName"].hasError("required") || this.f["fullName"].invalid) {
      this.f["fullName"].markAsDirty();
      this.f["fullName"].markAsTouched();
      this.f["fullName"].setErrors({
        required: true
      });
      // return;
    }
    if (this.f["location"].hasError("required") || this.f["location"].invalid) {
      this.f["location"].markAsDirty();
      this.f["location"].markAsTouched();
      this.f["location"].setErrors({
        required: true
      });
      // return;
    }
    if (
      this.f["highestDegree"].hasError("required") ||
      this.f["highestDegree"].invalid
    ) {
      this.f["highestDegree"].markAsDirty();
      this.f["highestDegree"].markAsTouched();
      this.f["highestDegree"].setErrors({
        required: true
      });
      return;
    }
  }
  ngOnInit() {}
}
