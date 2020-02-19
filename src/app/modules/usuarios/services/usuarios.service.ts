import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { StoreApp } from '../../../store';
import { CargarUsuariosAction, BorrarUsuarioAction } from '../store/actions/usuarios.action';
import { UsuariosState } from '../store/reducers/usuarios.reducer';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlListUsers: string;
  private urlDeleteUsers: string;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpService,
              private _store: Store<StoreApp>) {

    this.urlListUsers = 'users?delay=3';
    this.urlDeleteUsers = 'user/';
  }

  dispatchLoadUsers = () => {
    this._store.dispatch(new CargarUsuariosAction());
  }

  dispatchDeleteUser = (id: number) => {
    this._store.dispatch(new BorrarUsuarioAction(id));
  }

  getUsers = (): Observable<any> => {
    return this._http.getMethod(this.urlListUsers).pipe(map(response => response.data));
  }

  deleteUser = (id: number): Observable<any> => {
    return this._http.deleteMethod(`${this.urlDeleteUsers}${id}`);
  }

  getLoadUsers$ = (): Observable<UsuariosState> => {
    return this._store.select('users');
  }

}
