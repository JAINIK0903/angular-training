import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  public editId: string | undefined;
  @Input() public editUser!: IUser;
  @Output() modalClose = new EventEmitter();
  public editUserForm!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.editUser);
    if (this.editUserForm) {

      this.editId = this.editUser.id;
      console.log(this.editUser.id);
      // this.editUserForm.setValue({
      // name: this.editUserForm.name,
      // description: this.editUserForm.description ?? null,
      // quantity: this.editUserForm.quantity,
      // price: this.editUserForm.price,
      // });
      // }
    }
  }
  public initializeForm(): void {
    this.editUserForm = new FormGroup({
      email: new FormControl(this.editUser.email, Validators.required),
      role: new FormControl(this.editUser.role, Validators.required)
    })
  }

  public updateUser() {
    const user = {
      email: this.editUserForm.value.email,
      role: this.editUserForm.value.role
    };
    console.log(user);

    this.userService.updateUser(this.editId!, user).then(() => {
      this.modalClose.emit();
    });
  }

  public onClose() {
    this.modalClose.emit();
  }
}
