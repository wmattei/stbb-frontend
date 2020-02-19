import { Action, createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { User } from './auth.model';
import {
  loadCurrentUser,
  loadCurrentUserSuccess,
  setCurrentUser,
  authFailure,
} from "./auth.actions";

export interface AuthState {
  currentUser: User;
  loading: boolean;
}

export const initialState: AuthState = {
  currentUser: null,
  loading: false,
}

const authReducer = createReducer(
  initialState,

  on(loadCurrentUser, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadCurrentUserSuccess, (state, action) => {
    return {
      ...state,
      currentUser: action.data,
      loading: false
    };
  }),
  on(setCurrentUser, (state, action) => {
    return {
      ...state,
      currentUser: action.data,
      loading: false
    };
  }),
  on(authFailure, (state, action) => {
    return {
      ...state
    };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
