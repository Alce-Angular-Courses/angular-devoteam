class Persona  {
    constructor (name, edad) {
        this.name = name
        this.edad = edad
    }
    saludar () {
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años`)
    }
}

const o = new Persona('Pepe', 23)
o.saludar()

class Alumno extends Persona {
    constructor(name, edad, curso) {
        super(name, edad)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a = new Alumno('Luis', 34, 'Angular')
a.saludar()
a.turno = 'Tarde'
const b = new Alumno('Juan', 32, 'Angular')

console.log(a)
console.log(b)
