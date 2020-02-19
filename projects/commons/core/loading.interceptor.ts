import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { NavigationService } from './layout/services/navigation.service';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private navigationService: NavigationService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.navigationService.showLoading();
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    this.navigationService.hideLoading();
                }
            }),
            catchError((err: HttpErrorResponse) => {
                this.navigationService.hideLoading();
                return throwError(err);
            })
        );
    }
}
