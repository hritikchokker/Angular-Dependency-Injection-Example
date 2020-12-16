import { Component, forwardRef, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  FormBuilder,
FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
Validators
} from "@angular/forms";
import { Subscription } from "rxjs";

import { matchingInputsValidator } from './validators';

export interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true
    }
  ]
})
export class LoginFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): PasswordFormValues {
    return this.form.value;
  }

  set value(value: PasswordFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  get confirmPasswordControl() {
    return this.form.controls.confirmPassword;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: matchingInputsValidator('password', 'confirmPassword') }
    );

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { passwords: { valid: false } };
  }
}
