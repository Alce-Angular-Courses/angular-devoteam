Persona = function(name, edad) {
    this.name = name
    this.edad = edad
}

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.name} y tengo ${this.edad} años`)
}

const o = new Persona('Pepe', 23)
o.saludar()

