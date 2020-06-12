import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { StoreApp } from '../../../store';
import { UsuariosState } from '../store/usuarios.reducers';
import { cargarUsuariosAction, borrarUsuarioAction } from '../store/usuarios.actions';

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
    this._store.dispatch(cargarUsuariosAction());
  }

  dispatchDeleteUser = (id: number) => {
    this._store.dispatch(borrarUsuarioAction({id}));
  }

  getUsers = (): Observable<any> => {
    debugger;
    return this._http.getMethod(this.urlListUsers).pipe(tap(response => console.log(response)),pluck('data'));
  }

  deleteUser = (id: number): Observable<any> => {
    return this._http.deleteMethod(`${this.urlDeleteUsers}${id}`);
  }

  getLoadUsers$ = (): Observable<UsuariosState> => {
    return this._store.select('users');
  }

}
