import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GestureConfig } from '@angular/material';
import {
    BrowserModule,
    HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from 'projects/commons/core/loading.interceptor';
import { SharedModule } from 'projects/commons/shared/shared.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ToastrInterceptor } from '../../../commons/core/toastr.interceptor';
import { TokenInterceptor } from '../../../commons/core/token.interceptor';
import { AuthModule } from './auth/auth.module';
import { AuthStoreModule } from './auth/store/auth-store.module';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules,
        }),
        BrowserAnimationsModule,

        ToastrModule.forRoot({
            autoDismiss: true,
            timeOut: 5000,
            progressBar: true,
        }),
        SharedModule,
        HttpClientModule,
        AuthStoreModule,

        StoreModule.forRoot({}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ToastrInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },

        { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
