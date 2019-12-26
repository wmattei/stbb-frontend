import { Routes } from "@angular/router";
import { W3ProtectedGuard } from "@dploy-team/rapi-w3";

export const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/modules.module").then(m => m.ModulesModule),
    canActivate: [W3ProtectedGuard]
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];
