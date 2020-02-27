import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CargarUsuariosAction, CargarUsuariosSuccessAction } from '../actions/usuarios.actions';
import { usuariosReducer, estadoInicial } from './usuarios.reducers';
import { User } from '../../model/user.model';

const listUsers: User[] = [
                          {
                            firstName: 'Prueba1',
                            lastName: 'Prueba',
                            email: 'prueba@gmail.com',
                            id: 1,
                            activado: true
                          },
                          {
                            firstName: 'Prueba2',
                            lastName: 'Prueba',
                            email: 'prueba2@gmail.com',
                            id: 2,
                            activado: false
                          }
                          ];

describe('UsuariosReducers', () => {

  fit('Return default state', () => {
    const expectedAction = new CargarUsuariosAction();
    const newState = usuariosReducer(undefined, undefined);

    const initState = estadoInicial;

    expect(newState).toEqual(initState);

  });

  fit('Change loading state when dispatch cargarUsuariosAction and after load users', () => {
    const expectedAction = new CargarUsuariosAction();
    const initState = estadoInicial;

    let nextState = usuariosReducer(initState, expectedAction);
    expect(nextState.loading).toBe(true);


    const futureAction = new CargarUsuariosSuccessAction(listUsers);
    nextState = usuariosReducer(nextState, futureAction);
    expect(nextState.users.length).toBe(2);

  });
});
