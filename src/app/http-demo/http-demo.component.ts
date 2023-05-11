import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment as env } from 'src/environments/environment.development';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { Iuser } from './iuser';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss'],
})
export class HttpDemoComponent {
  @ViewChild('userForm') userForm!: NgForm;
  public users: Iuser[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.http
      .get(env.baseUrl + 'user.json')
      .pipe(
        map((res: { [k: string]: any }) => {
          const userList: any = [];
          Object.keys(res).forEach((id) => {
            let val: any = res[id];
            let obj = { id, ...val };
            userList.push(obj);
          });
          return userList;
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.users = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  public addUser(userForm: NgForm): void {
    const user = userForm.value;
    this.http.post(env.baseUrl + 'user.json', user).subscribe({
      next: (response) => {
        console.log(response);
        // this.userForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public updateUser(userForm: NgForm): void {
    const users = userForm.value;
    this.http.put(env.baseUrl + 'user.json', users).subscribe({
      next: (response) => {
        console.log(response);
        // this.userForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public deleteUser(userForm: NgForm): void {
    const user = userForm.value;
    this.http.delete(env.baseUrl + 'user.json', user).subscribe({
      next: (response) => {
        console.log(response);
        this.userForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
