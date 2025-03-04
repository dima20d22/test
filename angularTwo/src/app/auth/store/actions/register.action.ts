import { createAction, props } from '@ngrx/store';
import { RegisterRequestinterface } from '../../types/registerRequest.interface';

export const registerAction = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestinterface }>()
);
