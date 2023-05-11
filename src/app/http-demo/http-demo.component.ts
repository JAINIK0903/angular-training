import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iuser } from './iuser';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss'],
})
export class HttpDemoComponent {
  @ViewChild('userForm') userForm!: NgForm;
  public users: Iuser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUser().subscribe({
      next: (response) => {
        console.log(response);
        // this.userForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public addUser(userForm: NgForm): void {
    const user = userForm.value;
    this.userService.addUser(user).subscribe({
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
    this.userService.updateUser(users).subscribe({
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
    this.userService.deleteUser(user).subscribe({
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
