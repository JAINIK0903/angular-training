import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public emailRegex: RegExp = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;
  public passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  public error: string | undefined;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _userService: UserService
  ) { }

  public register(registerForm: NgForm): void {
    const email = registerForm.value.email;
    const password = registerForm.value.password;
    const isAdmin = registerForm.value.role;
    this._authService
      .signUp(email, password)
      .then((res) => {
        this.error = undefined;
        registerForm.reset();
        this._userService
          .create({
            uid: <string>res.user?.uid,
            email: <string>res.user?.email,
            role: isAdmin ? 'admin' : 'customer',
          })
          .then(() => {
            console.log('user created in rtdb');
          }).catch(error => {
            console.log(error);
          });
        console.log('user registered and signed in:', res);
        this._router.navigateByUrl('login');
      })
      .catch((error) => {
        console.log('Some error occurred:', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
        if (errorCode == 'auth/email-already-in-use') {
          this.error =
            'The email address is already in use by another account.';
        } else {
          this.error = errorMessage;
        }
      });
  }

  public onClickOfLogin() {
    this._router.navigate(['/login']);
  }
  public dismissAlert() {
    this.error = undefined;
  }
}
