import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, empty } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosState } from '../reducers/usuarios.reducers';
import { UsuariosEffects } from './usuarios.effects';
import { User } from '../../model/user.model';
import { CargarUsuariosAction, CargarUsuariosSuccessAction } from '../actions/usuarios.actions';
import {cold, hot} from 'jest-marbles';
import { Actions } from '@ngrx/effects';
import { UsuariosService } from '../../services/usuarios.service';


const currentState: UsuariosState = {
  users: [
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
  ]
  ,
  error: null,
  loading: false
};

describe('UsuariosService', () => {
  let actions: Observable<any>;
  let effects: UsuariosEffects;
  let usuariosService: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsuariosEffects,
        provideMockActions(() => actions),
        /* {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn()
          }
        } */
        {
            provide: UsuariosService,
            useValue: {
                getUsers: jest.fn(),
//                deleteUser: jest.fn(),
//                getLoadUsers: jest.fn(),
//                dispatchDeleteUser: jest.fn(),
//                dispatchLoadUsers: jest.fn()
            }
          }
      ]
    });

    effects = TestBed.inject(UsuariosEffects);
    usuariosService = TestBed.inject(UsuariosService);
  });

  fit('should be created UsuariosEffects', () => {
    expect(effects).toBeTruthy();
  });

  fit('prueba',() => {

    const usersList: User[] = currentState.users;
    const action = new CargarUsuariosAction();
    const actionSuccess = new CargarUsuariosSuccessAction(usersList);

    actions = hot('-a', { a: action });
    const response = cold('-a|', {a: usersList});
    const expected = cold('--b', {b: actionSuccess});

    usuariosService.getUsers = jest.fn(() => response);

    expect(effects.getUsers$).toBeObservable(expected);

  });
});
