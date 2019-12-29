import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import * as AuthActions from "./auth.actions";
import { AuthApiService } from "./auth-api.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private api: AuthApiService) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadCurrentUser),
      concatMap(action =>
        this.api.findCurrentUser(action.params).pipe(
          map(data => {
            return AuthActions.loadCurrentUserSuccess({
              data,
            });
          }),
          catchError(error => of(AuthActions.authFailure({ error })))
        )
      )
    )
  );


}
