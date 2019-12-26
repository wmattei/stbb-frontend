import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

@NgModule({
  imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
  exports: [],
  declarations: [],
  providers: []
})
export class AuthStoreModule {}
