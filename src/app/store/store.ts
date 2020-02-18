import { UserLoggedState } from './reducers/auth.reducer';
import { UsuariosState } from './reducers/usuarios.reducer';

export interface StoreApp {
    userLogged: UserLoggedState;
    users: UsuariosState;
}




