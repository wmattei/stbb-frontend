import { createAction, props } from "@ngrx/store";

export const setCurrentUser = createAction(
    "[Auth] Set current User",
    props<{ data: any }>()
);

export const loadCurrentUser = createAction(
    "[Auth] Load Current user",
    props<{ params?: any }>()
);

export const loadCurrentUserSuccess = createAction(
    "[Auth] Load Current user Success",
    props<{ data: any; }>()
);

export const authFailure = createAction(
    "[Auth] Auth Failure",
    props<{ error: any }>()
);
