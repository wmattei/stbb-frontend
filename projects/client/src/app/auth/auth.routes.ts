import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RestorePasswordSuccessComponent } from './pages/restore-password-success/restore-password-success.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { StartRegisterComponent } from './pages/start-register/start-register.component';

export const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            {
                path: 'restore-password',
                pathMatch: 'full',
                component: RestorePasswordComponent,
            },
            {
                path: 'restore-password/success',
                component: RestorePasswordSuccessComponent,
                pathMatch: 'full',
            },
            {
                path: 'reset-password/:token',
                component: ResetPasswordComponent,
            },
            {
                path: 'start-register',
                component: StartRegisterComponent,
            },
        ],
    },
];
