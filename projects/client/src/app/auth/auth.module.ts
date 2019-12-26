import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { authRoutes } from "./auth.routes";
import { LoginComponent } from "./pages/login/login.component";
import { LogoutComponent } from "./pages/logout/logout.component";
import { RestorePasswordComponent } from "./pages/restore-password/restore-password.component";
import { AuthStoreModule } from "./store/auth-store.module";
import { AuthService } from "./store/services/auth.service";
import { SharedModule } from "projects/commons/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

// https://github.com/angular/angular/issues/23609

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RestorePasswordComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes),
    AuthStoreModule,

    TranslateModule
  ],
  providers: [AuthService]
})
export class AuthModule {}
