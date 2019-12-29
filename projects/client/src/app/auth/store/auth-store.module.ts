import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthEffects } from "./auth.effects";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromAuth from "./auth.reducer";
import { AuthApiService } from "./auth-api.service"

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature("Auth", fromAuth.reducer),
        EffectsModule.forFeature([AuthEffects]),
    ],
    providers: [AuthApiService]

})
export class AuthStoreModule { }