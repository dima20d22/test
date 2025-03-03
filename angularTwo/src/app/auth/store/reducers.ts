import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateinterface } from '../types/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateinterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateinterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducer(
  state: AuthStateinterface = initialState,
  action: Action
) {
  return authReducer(state, action);
}
