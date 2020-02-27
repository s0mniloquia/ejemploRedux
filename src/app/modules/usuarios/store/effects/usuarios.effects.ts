import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import * as actions from '../actions/usuarios.actions';
@Injectable()
export class UsuariosEffects{
    public literalPayload = 'payload';
                // tslint:disable-next-line: variable-name
    constructor( private _actions$: Actions,
                 // tslint:disable-next-line: variable-name
                 private _usuariosService: UsuariosService
                ) {}

    @Effect()
    getUsers$ = this._actions$.pipe(ofType(actions.ActionsUsuarios.CARGAR_USUARIOS),
    switchMap( () => {
        return this._usuariosService.getUsers()
        .pipe(map(users => new actions.CargarUsuariosSuccessAction(users)),
        catchError(error => of(new actions.CargarUsuariosErrorAction(error))));
    }));

    @Effect()
    deleteUser$ = this._actions$.pipe(ofType(actions.ActionsUsuarios.BORRAR_USUARIO),
    switchMap( (action) => {
        const id = action[this.literalPayload];
        return this._usuariosService.deleteUser(id)
        .pipe(map((users) => new actions.BorrarUsuarioSuccessAction(id)),
        catchError(error => of(new actions.BorrarUsuarioErrorAction(error))));
    }));

}