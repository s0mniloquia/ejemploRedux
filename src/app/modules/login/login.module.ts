import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentView } from './views/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/effects/auth.effect';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../../store/reducers/auth.reducer';
import { ErrorModule } from '../../shared/components/error/error.module';
import { LoadingModule } from '../../shared/components/loading/loading/loading.module';


@NgModule({
  imports: [
    ErrorModule,
    LoadingModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('userLogged', authReducer),
    EffectsModule.forFeature([AuthEffects])

  ],
  declarations: [LoginComponentView],
  exports: [LoginComponentView]
})
export class LoginModule { }
