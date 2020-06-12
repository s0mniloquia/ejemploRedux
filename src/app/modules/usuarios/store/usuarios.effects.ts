import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { cargarUsuariosAction, cargarUsuariosSuccessAction, borrarUsuarioAction, borrarUsuarioSuccessAction } from './usuarios.actions';
import { updateUI } from '../../../store/ui.actions';
import { IError } from '../../../core/components/error/error.interface';

@Injectable()
export class UsuariosEffects{
    public literalPayload = 'payload';
                // tslint:disable-next-line: variable-name
    constructor( private _actions$: Actions,
                 // tslint:disable-next-line: variable-name
                 private _usuariosService: UsuariosService
                ) {}

    @Effect()
    getUsers$ = this._actions$.pipe(ofType(cargarUsuariosAction),
    switchMap( () => {
        return this._usuariosService.getUsers()
        .pipe(tap(users => console.log(`Los usuarios han sido cargados ${users}`)), 
              map(users => {
                            debugger;
                            console.log(users);
                            return cargarUsuariosSuccessAction({users})}),
              tap(users => console.log(`Los usuarios han sido cargados ${users}`)), 
/*               tap( users => {updateUI({loading:false, error:null}); console.log(users)}),
 */        catchError((error) => {
                                    console.log(error); 
                                    return of(updateUI({loading:false,error}))
                                }));
    }));

    @Effect()
    deleteUser$ = this._actions$.pipe(ofType(borrarUsuarioAction),
    switchMap( ({id}) => {
        return this._usuariosService.deleteUser(id)
        .pipe(map(() => borrarUsuarioSuccessAction({id}),
              tap( () => updateUI({loading:false, error:null})))),
              catchError((error) => of(updateUI({loading:false,error})));
    }));

}