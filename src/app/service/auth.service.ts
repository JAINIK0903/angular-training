import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(): void {
    this.isUserLoggedIn = true;
  }

  logout(): void {
    this.isUserLoggedIn = false;
  }

  isUserAuthenticated(): Promise<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isUserLoggedIn);
      }, 3000);
    });
    return promise;
  }
}
