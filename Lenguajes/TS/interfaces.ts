export interface UsuarioIf {
    nombre: string;
    email: string;
    pass: string;
    // saludar: Function;
}

export class Usuario implements UsuarioIf {
    constructor(
        public nombre: string,
        public email: string,
        public pass: string
    ) {}

    // saludar() {}
}
