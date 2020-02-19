import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('accessToken');
        let authReq = req;
        if (token) {
            authReq = req.clone({
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }

        return next.handle(authReq).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        const newToken = event.headers.get('NewToken');
                        const newExpiresIn = event.headers.get('NewExpiresIn');
                        localStorage.setItem('accessToken', newToken);
                        localStorage.setItem('expiresIn', newExpiresIn);
                    }
                },
                (error: HttpErrorResponse) => {
                    // If it is a unauthorized error remove the token from storage
                    if (error.status === 401) {
                        localStorage.removeItem('accessToken');
                    }
                }
            )
        );
    }
}
