import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CargarUsuariosAction } from './usuarios.actions';
import { UsuariosService } from '../../services/usuarios.service';

describe('UsuariosAction', () => {

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

  it('should be called a store.dispatch when CargarUsuariosAction is dispatched', () => {
    const expectedAction = new CargarUsuariosAction();

    //Inyectamos el objeto store declarado en el bloque beforeEach	
    const store = TestBed.inject(Store);
    //Espiamos el metodo dispatch del store
    const spy = jest.spyOn(store, 'dispatch');

    //Inicializamos el servicio propio que se comunicará con el store pasándole los parámetros
    //que el constructor requiere, el primero es undefined ya que para estas pruebas no lo necesitamos
    const serviceUsuarios = new UsuariosService(undefined, store);

    //Invocamos al método que va a lanzar la acción
    serviceUsuarios.dispatchLoadUsers();
    
    //Evaluamos que el metodo dispatch ha sido llamado
    expect(spy).toHaveBeenCalledTimes(1);
    //Evaluamos si se ha llamado correctamente al método dispatch con la acción, como argumento, que esperabamos
    expect(spy).toHaveBeenCalledWith(expectedAction);

  });
});
