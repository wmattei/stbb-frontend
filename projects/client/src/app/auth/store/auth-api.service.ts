import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './auth.model';

@Injectable()
export class AuthApiService {
    constructor(protected http: HttpClient) {}

    getBaseUrl(): string {
        return `${environment.URL_API}/auth`;
    }

    login(email, password) {
        return this.http
            .post(`${this.getBaseUrl()}/login`, { email, password })
            .pipe(
                tap((res: any) => {
                    this._setStorageData(res.data);
                })
            );
    }

    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expiresIn');
    }

    restorePassword(data) {
        return this.http.post(`${this.getBaseUrl()}/restore`, data).pipe(
            map((res: any) => {
                return res.data;
            })
        );
    }

    resetPassword(data) {
        return this.http.post(`${this.getBaseUrl()}/reset`, data).pipe(
            map((res: any) => {
                return res.data;
            })
        );
    }

    findCurrentUser(params): Observable<User> {
        return this.http.get(`${this.getBaseUrl()}/whoami`, { params }).pipe(
            map((res: any) => {
                return res.data;
            })
        );
    }

    _setStorageData(data) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('expiresIn', data.expiresIn);
    }

    isLoggedIn(): boolean {
        const token = localStorage.getItem('accessToken');
        const expireDate = +localStorage.getItem('expiresIn');

        return token && expireDate >= new Date().getTime();
    }
}
