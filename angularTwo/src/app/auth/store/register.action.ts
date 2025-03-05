import { createActionGroup, props } from '@ngrx/store';
import { RegisterRequestinterface } from '../types/registerRequest.interface';
import { CurrentUserinterface } from '../../shared/types/currentUser.interface';

export const registerActions = createActionGroup({
  source: '[Auth] Register',
  events: {
    register: props<{ request: RegisterRequestinterface }>(),
    'register Success': props<{ currentUser: CurrentUserinterface }>(),
    'register Failure': props<{ errors: string }>(),
  },
});
