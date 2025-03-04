import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateinterface } from '../types/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateinterface = {
  isSubmitting: false,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(registerAction, (state) => ({
      ...state,
      isSubmitting: true,
    }))
  ),
});
