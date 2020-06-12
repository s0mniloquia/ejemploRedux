import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class LoginComponentView implements OnInit {
  public formLogin: FormGroup;

  private data = {
    email: 'eve.holt@reqres.in', password: 'cityslicka'
  };

  // tslint:disable-next-line: variable-name
  constructor(private _loginService: AuthService,
              // tslint:disable-next-line: variable-name
              private _router: Router) {
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(this.data.email, Validators.required),
      password: new FormControl(this.data.password, Validators.required)
    });
  }

  onSubmit() {
    this._loginService.dispatchLogin(this.formLogin);
  }
}
