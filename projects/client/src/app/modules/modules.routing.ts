import { Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [],
    component: ModulesComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
    ]
  }
];
