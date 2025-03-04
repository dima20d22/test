import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateinterface } from '../types/authState.interface';
import { registerActions } from './register.action';

const initialState: AuthStateinterface = {
  isSubmitting: false,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(registerActions.registerSuccess, (state) => ({
      ...state,
      isSubmitting: true,
    }))
  ),
});
