import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'projects/commons/shared/shared.module';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';
import { AuthStoreModule } from './store/auth-store.module';
import { AuthApiService } from './store/auth-api.service';
import { RestorePasswordSuccessComponent } from './pages/restore-password-success/restore-password-success.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RestorePasswordComponent,
        LogoutComponent,
        RestorePasswordSuccessComponent,
        ResetPasswordComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(authRoutes),
        AuthStoreModule,
    ],
    providers: [AuthApiService],
})
export class AuthModule {}
