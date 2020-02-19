import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const getAuthState = createFeatureSelector<AuthState>("Auth");

export const getCurrentUser = createSelector(
  getAuthState,
  (state: AuthState) => state.currentUser
);

export const getIsLoadingAuth = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);
