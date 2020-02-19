import { Action } from '@ngrx/store';
import { User } from '../../../usuarios/model/user.model';
import { IError } from '../../../../shared/components/error/error.interface';


export const enum ActionsAuth {
    LOGIN = '[Login] Login',
    LOGIN_SUCCESS = '[Login] Login success',
    LOGIN_ERROR = '[Login] Login error',
}

export class LoginAction implements Action {
    readonly type = ActionsAuth.LOGIN;
    constructor(public payload: { email: string, password: string }) {}
}

export class LoginSuccessAction implements Action {
    readonly type = ActionsAuth.LOGIN_SUCCESS;
    constructor(public payload: User) {}
}

export class LoginErrorAction implements Action {
    readonly type = ActionsAuth.LOGIN_ERROR;
    constructor(public payload: IError) {}
}

export type actions = LoginAction | LoginSuccessAction | LoginErrorAction;
