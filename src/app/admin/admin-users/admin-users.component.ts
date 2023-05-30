import { Component, OnInit } from '@angular/core';

// interfaces
import { IUser } from 'src/app/interfaces/user';

// services
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  public userList: IUser[] = [];
  public isFetching: boolean = true;
  public isError: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.isFetching = true;
    this._userService.getAll().subscribe({
      next: (res) => {
        this.userList = res;
        this.isFetching = false;
        this.isError = false;
      },
      error: (error) => {
        console.log(error);
        this.isFetching = false;
        this.isError = true;
      },
    });
  }

  public deleteUser(id: string): void {
    this._userService.delete(id).catch((error) => {
      console.log(error);
    });
  }
}
