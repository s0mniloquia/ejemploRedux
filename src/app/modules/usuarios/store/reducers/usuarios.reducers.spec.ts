import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CargarUsuariosAction } from '../actions/usuarios.actions';
import { usuariosReducer, estadoInicial } from './usuarios.reducers';



describe('UsuariosReducers', () => {

  fit('Return default state', () => {
    const expectedAction = new CargarUsuariosAction();
    const newState = usuariosReducer(undefined, undefined);

    const initState = estadoInicial;

    expect(newState).toEqual(initState);

  });
});
