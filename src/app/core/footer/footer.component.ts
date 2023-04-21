import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  //date
  year = new Date().getFullYear();

  //email validation
  public email: string = '';
  public patternForEmail: RegExp =
    /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;

  public validateEmail(): void {
    if (this.patternForEmail.test(this.email)) {
      console.log(this.email + ' - ' + 'You are now subscriber.');
    } else {
      alert('Enter valid email address...!!');
    }
    this.email = '';
  }
}
