import { registerLocaleData } from "@angular/common";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import localePtBr from "@angular/common/locales/pt";
import { NgModule } from "@angular/core";
import { GestureConfig } from "@angular/material";
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import {
  W3ApiToastInterceptor,
  W3AuthModule,
  w3ConfigDefault,
  W3ConfigToast,
  W3Module,
  W3NotificationService,
  W3_AUTH_SERVICE,
  W3_MESSAGE_RESPONSE,
  W3_PROTECTED_FALLBACK_PAGE_URI,
  W3_PUBLIC_FALLBACK_PAGE_URI
} from "@dploy-team/rapi-w3";
import { environment } from "@env/environment";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { ToastrModule } from "ngx-toastr";
import { LoadingInterceptor } from "projects/commons/core/loading.interceptor";
import { MessagesResponsesService } from "projects/commons/core/messages-response-service";
import { SharedModule } from "projects/commons/shared/shared.module";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { AuthService } from "./auth/store/services/auth.service";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { FuseModule } from "projects/commons/@fuse/fuse.module";
import { fuseConfig } from "./layout/fuse-config";

registerLocaleData(localePtBr);
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/");
}
export const MY_FORMATS = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    BrowserAnimationsModule,

    ToastrModule.forRoot(W3ConfigToast),
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Rapi
    W3AuthModule,
    W3Module.forRoot(w3ConfigDefault),

    //Fuse
    // FuseModule.forRoot(fuseConfig),

    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    // Toast
    {
      provide: W3_MESSAGE_RESPONSE,
      useClass: MessagesResponsesService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: W3ApiToastInterceptor,
      multi: true
    },

    //Loading interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },

    // Auth
    { provide: W3_AUTH_SERVICE, useClass: AuthService },

    { provide: W3_PROTECTED_FALLBACK_PAGE_URI, useValue: "/" },
    { provide: W3_PUBLIC_FALLBACK_PAGE_URI, useValue: "/auth/login" },

    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },

    W3NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
