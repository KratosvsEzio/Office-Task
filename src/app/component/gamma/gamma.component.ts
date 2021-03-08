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

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formNameGroup  = this.fb.group({
      userName: ['', Validators.required]
    });

    this.formPasswordGroup  = this.fb.group({
      passWord: ['', Validators.required]
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
    const formData = {
      name: this.formNameGroup.value,
      email: this.formEmailGroup.value,
      password: this.formPasswordGroup.value,
      phone: this.formPhoneGroup.value
    }

    // this.formNameGroup.reset();
    // this.formEmailGroup.reset();
    // this.formPasswordGroup.reset();
    // this.formPhoneGroup.reset();

    console.log('Form Value', formData);
  }


}
