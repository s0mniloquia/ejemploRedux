import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { map, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserLogged } from '../model/auth.model';
import { FormGroup } from '@angular/forms';
import { StoreApp } from '../../../store';
import { LoginAction } from '../store/actions/auth.action';
import { AuthState } from '../store/reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  userLogged: UserLogged = null;
  private url: string;
  loginSuscription: Subscription;

  // tslint:disable-next-line: variable-name
  constructor(private http: HttpService, private _store: Store<StoreApp>) {
    this.url = 'login';
    this.loginSuscription = this._store.select('auth').subscribe(params => {
      this.userLogged = params?.currentUser;
    });
  }
  loginUser = (data: any): Observable<any> => {
    return this.http.postMethod(this.url, data).pipe(map(response => {
      return { nombre: 'prueba', apellidos: 'Probando', uid: '123123dwfsf32' };
    }));
  }

  isAuth = (): boolean => {
    return this.userLogged ? true : false;
  }

  getLoginState$ = (): Observable<AuthState> => {
    return this._store.select('auth');
  }

  dispatchLogin = (dataForm: FormGroup) => {
    this._store.dispatch(new LoginAction(dataForm.value));
  }

  ngOnDestroy(): void {
    this.loginSuscription?.unsubscribe();
  }
}
