import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild('f') firstTdForm!: NgForm;
  location: string = 'AHD';
  genders = ['Male', 'Female'];
  user = {
    emailId: '',
    password: '',
    location: '',
    gender: '',
    rememberMe: false,
  };
  submitted = false;

  constructor() {}

  ngOnInit() {}

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.firstTdForm);
    this.submitted = true;
    this.user.emailId = this.firstTdForm.value.email;
    this.user.password = this.firstTdForm.value.pwd;
    this.user.location = this.firstTdForm.value.location;
    this.user.gender = this.firstTdForm.value.gender;
    this.user.rememberMe = this.firstTdForm.value.remember;

    this.firstTdForm.reset();
  }

  setValueMethod() {
    this.firstTdForm.setValue({
      email: 'name@default.com',
      pwd: '1234567',
      location: 'BRD',
      gender: 'Male',
      remember: true,
    });
  }

  patchValueMethod() {
    this.firstTdForm.form.patchValue({
      location: 'RJT',
      gender: 'Female',
    });
  }
}
