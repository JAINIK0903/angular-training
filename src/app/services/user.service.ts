import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

// interfaces
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public usersRef!: AngularFireList<IUser>;

  constructor(private _db: AngularFireDatabase) {
    this.usersRef = _db.list('/users');
  }

  public get() {
    return this.usersRef.valueChanges();
  }

  public create(user: IUser) {
    console.log('create');
    return this.usersRef.push(user);
  }
}