import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';

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

  public getAll() {
    return this.usersRef.snapshotChanges().pipe(
      map((res: any) => {
        const userList: IUser[] = [];
        if (res != null) {
          res.forEach((item: any) => {
            userList.push({ id: item.key, ...item.payload.val() });
          });
        }
        return userList;
      })
    );
  }

  public create(user: IUser) {
    return this.usersRef.push(user);
  }

  public updateUser(key: string, user: IUser) {
    return this.usersRef.update(key, user);
  }

  public delete(key: string) {
    return this.usersRef.remove(key);
  }
}
