import { Injectable, OnDestroy } from '@angular/core';
import { UserLogged } from '../model/auth.model';
import { Subscription, Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';
import { Store } from '@ngrx/store';
import { StoreApp } from '../../../store';
import { mapTo } from 'rxjs/operators';
import { AuthState } from '../store/auth.reducer';
import { FormGroup } from '@angular/forms';
import { loginAction } from '../store/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: UserLogged = null;
  private url: string;
  loginSuscription: Subscription;

  // tslint:disable-next-line: variable-name
  constructor(private http: HttpService, private _store: Store<StoreApp>) {
    this.url = 'login';
  }
  loginUser = (data: any): Observable<UserLogged> => {
    return this.http.postMethod(this.url, data).pipe(mapTo({ nombre: 'prueba', apellidos: 'Probando', uid: '123123dwfsf32', rol:'Admin'}));
  }

 
  getLoginState$ = (): Observable<AuthState> => {
    return this._store.select('auth');
  }

  dispatchLogin = (dataForm: FormGroup) => {
    this._store.dispatch(loginAction(dataForm.value));
  }
}
