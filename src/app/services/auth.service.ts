import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$ = new BehaviorSubject<IUser | null>(null);

  constructor(
    private _fireAuth: AngularFireAuth,
    private _userService: UserService
  ) {
    this._fireAuth.onAuthStateChanged((user) => {
      if (user) {
        this._userService.getAll().subscribe({
          next: (users) => {
            const userData = users.filter((u) => u.uid === user.uid)[0];
            this.user$.next({
              uid: userData.uid,
              email: userData.email,
              role: userData.role,
            });
            localStorage.setItem('user', JSON.stringify(userData));
          },
        });
      } else {
        this.user$.next(null);
        localStorage.removeItem('user');
      }
    });
  }

  public signUp(email: string, password: string): Promise<any> {
    return this._fireAuth.createUserWithEmailAndPassword(email, password);
  }

  public signIn(email: string, password: string): Promise<any> {
    return this._fireAuth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): Promise<void> {
    return this._fireAuth.signOut();
  }
}
