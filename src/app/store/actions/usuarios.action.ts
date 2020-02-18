
// NGRX
import { Action } from '@ngrx/store';

// Model
import { User } from '../../modules/usuarios/model/user.model';

export const enum ActionsUsuarios{
    CARGAR_USUARIOS = '[Usuarios] Cargar usuarios',
    CARGAR_USUARIOS_ERROR = '[Usuarios] Cargar usuarios ERROR',
    CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS',
    BORRAR_USUARIO = '[Usuarios] Borrar usuario',
    BORRAR_USUARIO_SUCCESS = '[Usuarios] Borrar usuario SUCCESS',
    BORRAR_USUARIO_ERROR = '[Usuarios] Borrar usuario ERROR'
}

export class CargarUsuariosAction implements Action {
    readonly type = ActionsUsuarios.CARGAR_USUARIOS;
}

export class CargarUsuariosSuccessAction implements Action {
    readonly type = ActionsUsuarios.CARGAR_USUARIOS_SUCCESS;
    constructor(public payload: User[]) {}
}

export class CargarUsuariosErrorAction implements Action {
    readonly type = ActionsUsuarios.CARGAR_USUARIOS_ERROR;
    constructor(public payload: any) {}
}

export class BorrarUsuarioAction implements Action {
    readonly type = ActionsUsuarios.BORRAR_USUARIO;
    constructor(public payload: number) {}
}

export class BorrarUsuarioSuccessAction implements Action {
    readonly type = ActionsUsuarios.BORRAR_USUARIO_SUCCESS;
    constructor(public payload: number) {}
}

export class BorrarUsuarioErrorAction implements Action {
    readonly type = ActionsUsuarios.BORRAR_USUARIO_ERROR;
    constructor(public payload: any) {}
}

export type actions = CargarUsuariosAction
                    | CargarUsuariosSuccessAction
                    | CargarUsuariosErrorAction
                    | BorrarUsuarioAction
                    | BorrarUsuarioSuccessAction
                    | BorrarUsuarioErrorAction;
