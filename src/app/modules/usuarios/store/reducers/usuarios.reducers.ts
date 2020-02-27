import { ActionsUsuarios, actions } from '../actions/usuarios.actions';
import { User } from '../../model/user.model';
import { IError } from '../../../../shared/components/error/error.interface';
import { ActionType } from '@ngrx/store';


export interface UsuariosState {
    users: User[];
    error: IError;
    loading: boolean;
}

export const estadoInicial: UsuariosState = {
    users: [],
    error: null,
    loading: false
};



export function usuariosReducer(state: UsuariosState = estadoInicial, action: actions): UsuariosState {
    switch (action?.type) {
        case ActionsUsuarios.CARGAR_USUARIOS:
            return { ...state, error: null, loading: true };

        case ActionsUsuarios.CARGAR_USUARIOS_SUCCESS:
            return { ...state, users: action.payload, loading: false, error: null };

        case ActionsUsuarios.CARGAR_USUARIOS_ERROR:
            return { ...state, users: [], loading: false, error: action.payload };

        case ActionsUsuarios.BORRAR_USUARIO:
            return { ...state, error: null, loading: true };

        case ActionsUsuarios.BORRAR_USUARIO_SUCCESS:
            return { ...state, users: state.users.filter(user => user.id !== action.payload), loading: false, error: null };

        case ActionsUsuarios.BORRAR_USUARIO_ERROR:
            return { ...state, users: state.users, loading: false, error: action.payload };

        default:
            return state;
    }
}
