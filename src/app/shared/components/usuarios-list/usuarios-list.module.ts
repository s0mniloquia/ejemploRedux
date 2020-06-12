import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list.component';
import { ErrorModule } from '../../../core/components/error/error.module';
import { LoadingModule } from '../../../core/components/loading/loading.module';

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
