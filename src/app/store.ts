import { AuthState } from './modules/login/store/auth.reducer';
import { UsuariosState } from './modules/usuarios/store/usuarios.reducers';
import { UIState } from './store/ui.state';

export interface StoreApp {
    ui: UIState;
    auth: AuthState;
    users: UsuariosState;
}
