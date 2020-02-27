import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponentView } from './views/usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsuariosListModule } from '../../shared/components/usuarios-list/usuarios-list.module';
import { UsuariosEffects } from './store/effects/usuarios.effects';
import { usuariosReducer } from './store/reducers/usuarios.reducers';

@NgModule({
  declarations: [UsuariosComponentView],
  exports: [UsuariosComponentView],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    EffectsModule.forFeature([UsuariosEffects]),
    StoreModule.forFeature('users', usuariosReducer),
    UsuariosListModule
  ]
})
export class UsuariosModule { }
