import { Injectable } from "@angular/core";
import {
  W3AuthAbstractService,
  W3MeService,
  W3StorageService,
  UserModel
} from "@dploy-team/rapi-w3";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { tap, shareReplay, map } from "rxjs/operators";

@Injectable()
export class AuthService extends W3AuthAbstractService {
  constructor(
    http: HttpClient,
    meService: W3MeService,
    storage: W3StorageService
  ) {
    super(http, storage, meService);
  }

  /**
   * Serviço de login
   * @param email
   * @param password
   */
  login(email: string, password: string): Observable<UserModel | any> {
    return this.http
      .post(`${environment.URL_API}/rapi/guardian/auth/login`, {
        email,
        password
      })
      .pipe(
        tap(res => {
          this.setSession(res);

          //TODO usar o Meta
          this.storage.set("selected_lang", navigator.language);
        }),
        shareReplay()
      );
  }

  /**
   * Serviço de recuperação de senha
   */
  remind(data): Observable<any> {
    return this.http
      .post(`${environment.URL_API}/rapi/guardian/auth/password/remind`, data)
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  /**
   * Serviço de alteração de senha
   */
  reset(data): Observable<any> {
    return this.http
      .post(`${environment.URL_API}/rapi/guardian/auth/password/reset`, data)
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  /**
   * Service de sign-up
   */
  register(data): Observable<any> {
    return this.http
      .post(`${environment.URL_API}/rapi/guardian/auth/sign-up`, data)
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  getUrlRefreshToken(): string {
    return `${environment.URL_API}/rapi/guardian/auth/token/refresh`;
  }

  /**
   * Método que remove os dados da sessão
   */
  public clearToken(): void {
    this.storage.remove("access_token");
    this.storage.remove("expires_at");
    this.storage.remove("x-lang");
  }

  public getHeaders(token: string): { [p: string]: string | string[] } {
    this._headers["Authorization"] = `Bearer ${token}`;
    this._headers["X-Lang"] = navigator.language;
    return this._headers;
  }
}
