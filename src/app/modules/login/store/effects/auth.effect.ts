import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ActionsAuth, LoginSuccessAction, LoginErrorAction } from '../actions/auth.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../modules/login/services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    payload = 'payload';

    constructor(private actions$: Actions,
                private authService: AuthService) {
    }

    @Effect()
    doLogin$ = this.actions$.pipe(ofType(ActionsAuth.LOGIN),
    switchMap( action => {
        const loginForm = action[this.payload];
        return this.authService.loginUser(loginForm)
            .pipe(map( user => new LoginSuccessAction(user) ),
                catchError( error => of(new LoginErrorAction(error))  )
            );
    }));
}
