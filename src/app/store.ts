import { AuthState } from './modules/login/store/reducers/auth.reducer';
import { UsuariosState } from './modules/usuarios/store/reducers/usuarios.reducer';

export interface StoreApp {
    auth: AuthState;
    users: UsuariosState;
}




