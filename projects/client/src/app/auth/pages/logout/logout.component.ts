import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../../store/auth-api.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth.reducer';
import { setCurrentUser } from '../../store/auth.actions';

@Component({
    selector: 'app-logout',
    template: `
        Loging out...
    `,
    styles: [],
})
export class LogoutComponent implements OnInit {
    constructor(
        private authService: AuthApiService,
        private router: Router,
        private store: Store<AuthState>
    ) {}

    ngOnInit() {
        this.authService.logout();
        this.store.dispatch(setCurrentUser({data: null}))
        this.router.navigate(['/']);
    }
}
