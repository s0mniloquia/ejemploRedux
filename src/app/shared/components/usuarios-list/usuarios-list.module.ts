import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list.component';
import { ErrorModule } from '../error/error.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorModule,
    LoadingModule
  ],
  declarations: [UsuariosListComponent],
  exports: [UsuariosListComponent]
})
export class UsuariosListModule { }
