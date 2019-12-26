import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { W3WebSocketModule, NotificationService } from "@dploy-team/rapi-w3";
import { TranslateModule } from "@ngx-translate/core";
import { BroadcastService } from "projects/admin/src/app/layout/navigation/notification/broadcast.service";
import { SharedModule } from "projects/commons/shared/shared.module";
import { NavigationPwaComponent } from "../layout/navigation/navigation.component";
import { ModulesComponent } from "./modules.component";
import { routes } from "./modules.routing";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    ModulesComponent,
    ProfileComponent,
    NavigationPwaComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule.forChild(),
    W3WebSocketModule
  ],
  providers: [BroadcastService, NotificationService]
})
export class ModulesModule {}
