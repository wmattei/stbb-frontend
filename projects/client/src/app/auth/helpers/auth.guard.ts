import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { AuthApiService } from '../store/auth-api.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthApiService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentRoute = this.router.url;
        
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/auth/login'], {
                queryParams: { redirectUrl: '/portal'+currentRoute },
            });
        }
        return true;
    }
}
