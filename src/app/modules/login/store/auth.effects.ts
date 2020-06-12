import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { loginAction, loginSuccessAction } from './auth.actions';
import { updateUI } from '../../../store/ui.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(private _actions$: Actions,
                private _authService: AuthService,
                private _router: Router) {
    }

    doUserLogin$ = createEffect(
        () => this._actions$.pipe(ofType(loginAction),
        switchMap( ({email,password}) => {
            return this._authService.loginUser({email, password})
                .pipe(map( userLogged => loginSuccessAction({userLogged}) ),
                    tap( userLogged => {
                                        updateUI({loading:false,error:null});
                                        this._router.navigate(['/usuarios']);
                                    }),
                    catchError( error => of(updateUI({loading:false, error: error}))  )
                );
        }))
    )
}
