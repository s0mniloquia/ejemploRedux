import { createAction, props } from '@ngrx/store';
import { UserLogged } from '../model/auth.model';


export const enum ActionsAuth {
    LOGIN = '[Login] Login',
    LOGIN_SUCCESS = '[Login] Login success'}

export const loginAction = createAction(
    ActionsAuth.LOGIN,
    props<{ email: string, password: string}>()
)

export const loginSuccessAction = createAction(
    ActionsAuth.LOGIN_SUCCESS,
    props<{userLogged: UserLogged}>()
)


