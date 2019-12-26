import { Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { W3ProtectedGuard } from "@dploy-team/rapi-w3";
import { ProfileComponent } from "./profile/profile.component";
import { NotificationComponent } from "./notification/notification.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [W3ProtectedGuard],
    component: ModulesComponent,
    children: [
      {
        path: "meu-perfil",
        component: ProfileComponent
      },
      {
        path: "notificacoes",
        component: NotificationComponent
      }
    ]
  }
];
