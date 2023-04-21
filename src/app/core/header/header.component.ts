import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems: Array<string> = [
    'Dashboard',
    'Today`s Deal',
    'Mobile',
    'Electronics',
    'Customer Service',
    'About',
  ];

  clickMe() {
    console.log('navItems:', this.navItems);
  }
}
