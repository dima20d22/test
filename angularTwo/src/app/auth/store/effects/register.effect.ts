import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { registerActions } from '../register.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserinterface } from '../../../shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(registerActions.register),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserinterface) =>
            registerActions.registerSuccess({ currentUser })
          ),
          catchError((error) => {
            const errorMessage = error?.message || 'Unknown error';
            return of(
              registerActions.registerFailure({ errors: errorMessage })
            );
          })
        )
      )
    )
  );

  constructor(private action$: Actions, private authService: AuthService) {}
}
