class PersonaBasic  {
    name;
    edad;
    constructor (name, edad) {
        this.name = name;
        this.edad = edad;
    }
    saludar () {
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años`);
    }
}

const o1 = new PersonaBasic('Pepe', 23);
o.saludar();

class AlumnoBasic extends PersonaBasic {
    curso;
    constructor(name, edad, curso) {
        super(name, edad);
        this.curso = curso;
    }

    saludar() {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}



const a1 = new AlumnoBasic('Luis', 34, 'Angular');
a.saludar();
// a.turno = 'Tarde';
const b1 = new AlumnoBasic('Juan', 32, 'Angular');

console.log(a);
console.log(b);
