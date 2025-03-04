import { createActionGroup, props } from '@ngrx/store';
import { RegisterRequestinterface } from '../types/registerRequest.interface';

export const registerActions = createActionGroup({
  source: '[Auth] Register',
  events: {
    'register Success': props<{ request: RegisterRequestinterface }>(),
  },
});
