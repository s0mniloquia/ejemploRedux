import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'vdfn-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class UsuariosComponentView implements OnInit {

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

}
