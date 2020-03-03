import { TestBed, inject } from '@angular/core/testing';
import { UsuariosService } from './usuarios.service';
import { Store } from '@ngrx/store';
import { UsuariosState } from '../store/reducers/usuarios.reducers';
import { CargarUsuariosAction } from '../store/actions/usuarios.actions';
import { UsuariosEffects } from '../store/effects/usuarios.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsuariosEffects, provideMockActions(() => actions),
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

  fit('should be created UsuariosEffects', inject([UsuariosEffects], (service: UsuariosEffects) => {
/*     expect(service).toBeTruthy();
 */    expect(service.getUsers$).toBeTruthy();

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
