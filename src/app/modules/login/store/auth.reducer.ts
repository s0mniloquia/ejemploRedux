import { loginAction, loginSuccessAction } from './auth.actions';
import { UserLogged } from '../model/auth.model';
import { createReducer, on } from '@ngrx/store';

export interface AuthState {
    userLogged: UserLogged;
}

const estadoInicial: AuthState = {
    userLogged: null,
};

const _authReducer = createReducer( estadoInicial, 
     on(loginAction,(state,{email, password}) => ({...state})),

     on(loginSuccessAction, (state,{ userLogged }) => ({...state, userLogged}))
);

export const authReducer = (state, action) =>  _authReducer(state, action);




