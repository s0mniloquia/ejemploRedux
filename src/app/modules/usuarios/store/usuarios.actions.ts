
// NGRX
import { createAction, props } from '@ngrx/store';

// Model
import { User } from '../model/user.model';

export const enum ActionsUsuarios{
    CARGAR_USUARIOS = '[Usuarios] Cargar usuarios',
    CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS',
    BORRAR_USUARIO = '[Usuarios] Borrar usuario',
    BORRAR_USUARIO_SUCCESS = '[Usuarios] Borrar usuario SUCCESS',
}

export const cargarUsuariosAction = createAction(
    ActionsUsuarios.CARGAR_USUARIOS
)

export const cargarUsuariosSuccessAction = createAction(
    ActionsUsuarios.CARGAR_USUARIOS_SUCCESS,
    props<{users: User[]}>()
)

export const borrarUsuarioAction = createAction(
    ActionsUsuarios.BORRAR_USUARIO,
    props<{id: number}>()
)

export const borrarUsuarioSuccessAction = createAction(
    ActionsUsuarios.BORRAR_USUARIO_SUCCESS,
    props<{id: number}>()
)