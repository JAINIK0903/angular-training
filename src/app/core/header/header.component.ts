import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public brandName: string = 'Bookshop';
  public menuItems = [
    { label: 'Dashboard', action: this.clickMe },
    { label: "Today's Deal", action: this.clickMe },
    { label: 'Mobile', action: this.clickMe },
    { label: 'Electronics', action: this.clickMe },
    { label: 'Customer Service', action: this.clickMe },
    { label: 'About', action: this.clickMe },
  ];
  public navItems: Array<string> = [
    'Dashboard',
    'Today`s Deal',
    'Mobile',
    'Electronics',
    'Customer Service',
    'About',
  ];

  public clickMe() {
    console.log('navItems:', this.navItems);
  }
}
