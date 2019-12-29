import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { RestorePasswordComponent } from "./pages/restore-password/restore-password.component";
import { LogoutComponent } from "./pages/logout/logout.component";

export const authRoutes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "logout", component: LogoutComponent },
      { path: "restore-password", component: RestorePasswordComponent }
    ]
  }
];
