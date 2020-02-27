import { TestBed, inject } from '@angular/core/testing';
import { UsuariosService } from './usuarios.service';
import { CargarUsuariosAction } from '../store/actions/usuarios.actions';
import { Store } from '@ngrx/store';
import { StoreApp } from '../../../store';
import { HttpService } from '../../../core/services/http.service';
import { HttpClient } from '@angular/common/http';


describe('UsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariosService, HttpService]
    });
  });

  it('should be created', inject([UsuariosService], (service: UsuariosService) => {
    expect(service).toBeTruthy();
  }));

  fit('should be called a store.dispatch with CargarUsuariosAction', () => {
    const expectedAction = new CargarUsuariosAction();

    const store = jasmine.createSpyObj<Store<StoreApp>>('store', ['dispatch']);
    const serviceUsuarios = new UsuariosService( undefined, store);

    serviceUsuarios.dispatchLoadUsers();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
