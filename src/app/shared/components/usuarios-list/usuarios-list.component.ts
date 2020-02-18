import { Component, OnInit } from '@angular/core';
import { User } from '../../../modules/usuarios/model/user.model';
import { IError } from '../error/error.interface';
import { UsuariosService } from '../../../modules/usuarios/services/usuarios.service';

@Component({
  selector: 'vdfn-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  public loading: boolean;
  public listaUsuarios: User[];
  public error: IError = null;
  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
    this._usuariosService.dispatchLoadUsers();
    this._usuariosService.getLoadUsers$().subscribe( users => {
      this.listaUsuarios = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });


  }

  deleteUser = (id: number) => {
    this._usuariosService.dispatchDeleteUser(id);
  }

}
