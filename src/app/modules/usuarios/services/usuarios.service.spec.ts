import { TestBed, inject } from '@angular/core/testing';
import { UsuariosService } from './usuarios.service';
import { Store } from '@ngrx/store';
import { UsuariosState } from '../store/reducers/usuarios.reducers';
import { CargarUsuariosAction } from '../store/actions/usuarios.actions';


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
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn()
          }
        }
      ]
    });
  });

  it('should be created', inject([UsuariosService], (service: UsuariosService) => {
    expect(service).toBeTruthy();
  }));

  fit('should be called a store.dispatch with CargarUsuariosAction', () => {
    const expectedAction = new CargarUsuariosAction();

    const store = TestBed.inject(Store);
    const spy = jest.spyOn(store, 'dispatch');

    const serviceUsuarios = new UsuariosService(undefined, store);

    serviceUsuarios.dispatchLoadUsers();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expectedAction);

  });
});
