import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss'],
})
export class ReactiveFormDemoComponent implements OnInit {
  genders: Array<string> = ['Male', 'Female'];
  userForm!: FormGroup;
  forbiddenPasswords: Array<string> = ['12345678', 'abcdefgh'];

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    (this.userForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.checkForbiddenEmail as AsyncValidatorFn
        ),
        // password: new FormControl(null, Validators.required),
        password: new FormControl(null, [
          Validators.required,
          this.checkForbiddenPasswords.bind(this),
        ]),
      }),
      location: new FormControl('AHD'),
      gender: new FormControl('Male'),
      remember: new FormControl(null, Validators.required),
      hobbies: new FormArray([]),
    })),
      this.userForm.get('login.email')?.statusChanges.subscribe((status) => {
        console.log(status);
      });
  }

  onSubmit() {
    console.log('this.userForm:-', this.userForm);
    this.userForm.reset({ gender: 'Male', location: 'BRD' });
  }

  addHobby() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(formControl);
  }

  getHobbyControls() {
    return (<FormArray>this.userForm.get('hobbies')).controls;
  }

  checkForbiddenPasswords(
    control: FormControl
  ): { [k: string]: boolean } | null {
    if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
      return { passwordForbidden: true };
    }
    // return { 'passwordForbidden': false }; // this will not work. So return null
    return null;
  }

  checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@admin.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  setValueMethod() {
    this.userForm.setValue({
      login: {
        email: 'default@gmail.com',
        password: '12345678',
      },
      location: 'AHD',
      gender: 'Male',
      remember: true,
      hobbies: [],
    });
  }

  patchValueMethod() {
    this.userForm.patchValue({
      location: 'RJT',
      gender: 'Female',
    });
  }
}
