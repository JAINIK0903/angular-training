import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// services
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;
  public userEmail: string | undefined;

  public authSubscription!: Subscription;

  public routerLinkList: { title: string; href: string }[] = [];

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this._authService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.isLoggedIn = true;
          this.isAdmin = user.role === 'admin' ? true : false;
          this.userEmail = user.email;
          if (this.isAdmin) {
            this.routerLinkList = [
              {
                title: 'Home',
                href: '/home',
              },
              {
                title: 'Products',
                href: '/products',
              },
              {
                title: 'Cart',
                href: '/cart',
              },
              {
                title: 'My Orders',
                href: '/orders',
              },
              {
                title: 'Admin',
                href: '/admin',
              },
            ];
          } else {
            this.routerLinkList = [
              {
                title: 'Home',
                href: '/home',
              },
              {
                title: 'Products',
                href: '/products',
              },
              {
                title: 'Cart',
                href: '/cart',
              },
              {
                title: 'My Orders',
                href: '/orders',
              },
            ];
          }
        } else {
          this.isLoggedIn = false;
          this.isAdmin = false;
          this.userEmail = undefined;
          this.routerLinkList = [
            {
              title: 'Home',
              href: '/home',
            },
            {
              title: 'Login',
              href: '/login',
            },
          ];
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  public logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      this._authService.signOut().then(() => {
        this._router.navigateByUrl('login');
      });
    }
  }
}
