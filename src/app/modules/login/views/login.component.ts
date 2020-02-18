import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginAction } from '../../../store/actions/auth.action';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLoggedState } from 'src/app/store/reducers/auth.reducer';
import { IError } from '../../../shared/components/error/error.interface';

@Component({
  selector: 'vdfn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class LoginComponentView implements OnInit, OnDestroy {

  public formLogin: FormGroup;
  public error: IError = null;
  loading: boolean;

  // tslint:disable-next-line: semicolon
  loginChanges$: Subscription

  private data = {
    email: 'eve.holt@reqres.in', password: 'cityslicka'
  };

  // tslint:disable-next-line: variable-name
  constructor(private _loginService: AuthService,
              // tslint:disable-next-line: variable-name
              private _router: Router) {
    this.loading = false;
  }

  ngOnInit() {
    this._loginService.loginUser(this.data);
    this.formLogin = new FormGroup({
      email: new FormControl(this.data.email, Validators.required),
      password: new FormControl(this.data.password, Validators.required)
    });

    this.loginChanges$ = this._loginService.getLoginState$().subscribe(user => {
      this.loading = user.loading;
      this._router.navigate(['/usuarios']);
    },
    error => console.log(error));

  }

  onSubmit() {
    this._loginService.setLoginState(this.formLogin);
  }

  ngOnDestroy(): void {
    this.loginChanges$?.unsubscribe();
  }
}
