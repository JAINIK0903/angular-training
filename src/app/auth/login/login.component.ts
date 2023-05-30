import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailRegex: RegExp = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;
  public error: string | undefined;

  constructor(private _router: Router, private _authService: AuthService) { }

  public login(loginForm: NgForm): void {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    this._authService
      .signIn(email, password)
      .then((res) => {
        this.error = undefined;
        loginForm.reset();
        console.log('You are Successfully logged in!', res);
        this._router.navigateByUrl('home');
      })
      .catch((error) => {
        console.log('Something is wrong:', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
        this.error = 'Incorrect email or password.';
      });
  }

  public dismissAlert() {
    this.error = undefined;
  }

  public onClickOfRegister() {
    this._router.navigate(['/register']);
  }
}
