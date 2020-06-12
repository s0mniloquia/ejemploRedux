import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../modules/usuarios/model/user.model';
import { UsuariosService } from '../../../modules/usuarios/services/usuarios.service';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  public listaUsuarios$: Observable<User[]>;

  constructor(private _usuariosService: UsuariosService) { }
 

  ngOnInit() {
    this._usuariosService.dispatchLoadUsers();
    this.listaUsuarios$ = this._usuariosService.getLoadUsers$().pipe(pluck('users'));
  }

  deleteUser = (id: number) => {
    this._usuariosService.dispatchDeleteUser(id);
  }

}
