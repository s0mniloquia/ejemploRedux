import { UserLoggedState } from './modules/login/store/reducers/auth.reducer';
import { UsuariosState } from './modules/usuarios/store/reducers/usuarios.reducer';

export interface StoreApp {
    userLogged: UserLoggedState;
    users: UsuariosState;
}




