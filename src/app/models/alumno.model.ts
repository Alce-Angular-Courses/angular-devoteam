export interface Curso {
    id: string | number;
    nombre: string;
}

export class Alumno {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public email: string = '',
        public isOk: boolean = false,
        public turno: string = '',
        public curso: Curso = {id: '', nombre: ''}) {
    }
}

