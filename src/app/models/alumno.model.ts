export interface Curso {
    id: string | number;
    nombre: string;
    descripcion: string;
}

export interface Turno {
    id: string | number;
    nombre: string;
    horario: string;
}


export class Alumno {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public email: string = '',
        public isOk: boolean = false,
        public turno: Turno = {id: '', nombre: '', horario: ''},
        public curso: Curso = {id: '', nombre: '', descripcion: ''}) {
    }
}

