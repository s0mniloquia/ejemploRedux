import { AuthState } from './modules/login/store/reducers/auth.reducers';
import { UsuariosState } from './modules/usuarios/store/reducers/usuarios.reducers';

export interface StoreApp {
    auth: AuthState;
    users: UsuariosState;
}




