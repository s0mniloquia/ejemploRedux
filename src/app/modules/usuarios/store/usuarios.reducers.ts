import { User } from '../model/user.model';
import { cargarUsuariosAction, cargarUsuariosSuccessAction, borrarUsuarioAction, borrarUsuarioSuccessAction } from './usuarios.actions';
import { on, createReducer } from '@ngrx/store';


export interface UsuariosState {
    users: User[];
}

export const estadoInicial: UsuariosState = {
    users: []
};

const _usuariosReducer = createReducer( estadoInicial, 
    on(cargarUsuariosAction, (state)=> ({...state})),
    on(cargarUsuariosSuccessAction, (state,{ users }) => ({...state, users })),
    on(borrarUsuarioAction, (state,{id})=> ({...state})),
    on(borrarUsuarioSuccessAction, (state,{id}) => ({...state, users: state.users.filter(user => user.id !== id)}))
)

export const usuariosReducer = (state, action) => _usuariosReducer(state, action);