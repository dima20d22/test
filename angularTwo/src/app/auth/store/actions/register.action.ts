import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { RegisterRequestinterface } from '../../types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.Register,
  props<RegisterRequestinterface>()
);
