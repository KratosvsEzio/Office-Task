import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css'],
})
export class GammaComponent implements OnInit {

  isLinear = true;
  formNameGroup : FormGroup;
  formPasswordGroup : FormGroup;
  formEmailGroup : FormGroup;
  formPhoneGroup : FormGroup;

  formData: any = {};

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formNameGroup  = this.fb.group({
      userName: ['', Validators.required]
    });

    this.formPasswordGroup  = this.fb.group({
      password: ['', Validators.required]
    });

    this.formEmailGroup  = this.fb.group({
      emailID: ['', Validators.compose([Validators.required, Validators.email])]
    });

    this.formPhoneGroup  = this.fb.group({
      // mobile: ['', Validators.compose([Validators.required, Validators.min(10)])]
      mobile: ['']
    });
  }

  onSubmit() {
    this.formData = {
      name: this.formNameGroup.controls.userName.value,
      email: this.formEmailGroup.controls.emailID.value,
      password: this.formPasswordGroup.controls.password.value,
      phone: this.formPhoneGroup.controls.mobile.value
    }
    console.log('Form Value', this.formData);
  }

  resetStepperForm(stepper: any) {

    this.formResetState(this.formNameGroup);
    this.formResetState(this.formEmailGroup);
    this.formResetState(this.formPasswordGroup);
    this.formResetState(this.formPhoneGroup);

    stepper.reset();
  }

  formResetState(form) {
    form.reset();
    form.markAsPristine();
    form.markAsUntouched();
    form.updateValueAndValidity();
  }


}
