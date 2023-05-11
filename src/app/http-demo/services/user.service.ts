import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { Iuser } from '../iuser';
import { NgForm } from '@angular/forms';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  public getUser(): Observable<Iuser> {
    return this.http.get(env.baseUrl + 'user.json').pipe(
      map((res: { [k: string]: any }) => {
        const userList: any = [];
        Object.keys(res).forEach((id) => {
          let val: any = res[id];
          let obj = { id, ...val };
          userList.push(obj);
        });
        return userList;
      })
    );
  }

  public addUser(user: Iuser): Observable<any> {
    return this.http.post(env.baseUrl + 'user.json', user);
  }

  public updateUser(users: any): Observable<any> {
    return this.http.put(env.baseUrl + 'user.json', users);
  }

  public deleteUser(user: any): Observable<any> {
    return this.http.delete(env.baseUrl + 'user.json', user);
  }
}
