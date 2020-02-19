import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ToastrInterceptor implements HttpInterceptor {
    constructor(private _toastrService: ToastrService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                if (
                    event instanceof HttpResponse 
                ) {
                    const message = event.body.message;
                    this.showError(event.status, message)
                }
            }, error => {
                 if (
                    error instanceof HttpErrorResponse
                ) {
                    const message = error.error.message;
                    this.showError(error.status, message)
                }
            })
        );
    }

    showError(status, message) {
        if (message) {
            if (status.toString().startsWith('20')) {
                this._toastrService.success(message);
                return;
            }
            if (status.toString().startsWith('40')) {
                this._toastrService.error(message);
                return;
            }
            if (status.toString().startsWith('50')) {
                this._toastrService.error(
                    'No fue possible conectar al servidor'
                );
                return;
            }
        }
    }
}
