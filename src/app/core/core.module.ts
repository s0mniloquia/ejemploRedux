import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [ErrorComponent, LoadingComponent],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
