import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanLoad {
    constructor(private _router: Router) { }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const user = localStorage.getItem('user');
        if (user) {
            const userObj = JSON.parse(user);
            if (userObj.role == 'admin') {
                return true;
            } else {
                this._router.navigateByUrl('home');
                return false;
            }
        } else {
            this._router.navigateByUrl('login');
            return false;
        }
    }
}
