export class UserLogged {
    uid: string;
    nombre: string;
    apellidos: string;
    rol: string;

    constructor( user: IUserLogged) {
        this.uid = user.uid;
        this.nombre = user.nombre;
        this.apellidos = user.apellidos;
        this.rol = user.rol;
    }

}

export interface IUserLogged {
    uid: string;
    nombre: string;
    apellidos: string;
    rol: string;
}
