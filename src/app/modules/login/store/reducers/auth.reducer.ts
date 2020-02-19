import { actions, ActionsAuth } from '../actions/auth.action';
import { UserLogged } from '../../model/auth.model';

export interface AuthState {
    currentUser: UserLogged;
    error: any;
    loading: boolean;
}

const estadoInicial: AuthState = {
    currentUser: null,
    error: null,
    loading: false
};

export function authReducer(state: AuthState = estadoInicial, action: actions) {
    switch ( action.type ) {

        case ActionsAuth.LOGIN:
            return {...state, error: null, loading: true};

        case ActionsAuth.LOGIN_SUCCESS:
            return {...state, currentUser: action.payload, loading: false};

        case ActionsAuth.LOGIN_ERROR:
                return {...state, loading: false, error: action.payload};

        default:
            return state;
    }
}




