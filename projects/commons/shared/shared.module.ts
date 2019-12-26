import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  MaterialModule,
  PiecePaginatorModule,
  PieceProfileAvatarModule
} from "@dploy-team/rapi-piece";
import { RolePipe } from "projects/admin/src/app/modules/users/pipes/role.pipe";
import { NavigationService } from "../core/layout/services/navigation.service";
import { PieceNotFoundLoadingModule } from "@dploy-team/rapi-piece";
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  declarations: [RolePipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    TextMaskModule,

    //Piece
    PieceProfileAvatarModule,
    PiecePaginatorModule,
    PieceNotFoundLoadingModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    //Piece
    PieceProfileAvatarModule,
    PiecePaginatorModule,
    PieceNotFoundLoadingModule,

    //Shared Modules
    MaterialModule,
    TextMaskModule,

    //Pipe
    RolePipe
  ],

  providers: [NavigationService, { provide: LOCALE_ID, useValue: "pt-BR" }]
})
export class SharedModule {}
