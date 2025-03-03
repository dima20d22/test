import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/appState.interface';
import { AuthStateinterface } from '../types/authState.interface';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateinterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateinterface) => authState.isSubmitting
);
