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

  it('Return default state', () => {
    const newState = usuariosReducer(undefined, undefined);
    const initState = estadoInicial;
    expect(newState).toEqual(initState);
  });

  it('Change loading state when dispatch cargarUsuariosAction and after when dispatch CargarUsuariosSuccessAction it load users', () => {
    const expectedAction = new CargarUsuariosAction();
    const initState = estadoInicial;

    let nextState = usuariosReducer(initState, expectedAction);
    expect(nextState.loading).toBe(true);

    const futureAction = new CargarUsuariosSuccessAction(listUsers);
    nextState = usuariosReducer(nextState, futureAction);
    expect(nextState.users.length).toBe(2);
    expect(nextState.loading).toBe(false);
  });
});
