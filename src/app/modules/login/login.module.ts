import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentView } from './views/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorModule } from '../../core/components/error/error.module';
import { LoadingModule } from '../../core/components/loading/loading.module';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';


@NgModule({
  imports: [
    ErrorModule,
    LoadingModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])

  ],
  declarations: [LoginComponentView],
  exports: [LoginComponentView]
})
export class LoginModule { }
