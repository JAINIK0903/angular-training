import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  routerLinkList = [
    {
      title: 'Products',
      href: '/admin/products',
    },
    {
      title: 'Orders',
      href: '/admin/orders',
    },
    {
      title: 'Users',
      href: '/admin/users',
    },
  ];
}
