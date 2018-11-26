const o = {
    name: 'Pepe',
    mostrar: function () {
        console.log(this)
    },
    mostrarA: () => console.log(this)
}

// Ejectucion tipo Metodo
o.mostrar()

const otroMostrar = o.mostrar
const otroMostrarA = o.mostrarA

// Ejecución tipo función
otroMostrar()

// Ejecución tipo Constructor
new otroMostrar()

// Ejecucion tipo apply
Object.apply()
Object.call()


o.mostrarA()
otroMostrarA()
