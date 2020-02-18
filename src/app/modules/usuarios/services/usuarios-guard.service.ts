import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from '../../login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosGuardService implements CanActivate, CanLoad {

  constructor(public authService: AuthService) { }

  canActivate() {
    return this.authService.isAuth();
  }

  canLoad() {
    return this.authService.isAuth();
  }

}
