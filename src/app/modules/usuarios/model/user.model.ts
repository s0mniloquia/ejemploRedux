export class User{

    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public id: number,
                public activado: boolean = true) {}
}
