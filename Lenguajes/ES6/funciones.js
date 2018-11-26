function algo () {
    console.log('Soy algo')
}

algo()

const otro = function () {
    console.log('Soy otro')
}

otro()

const ver = function (o) {
    console.log(o)
}

ver ({user: 'Pepe'})

function calcular (a, b, callback) {
    console.log(callback(a,b))
}

calcular(12, 15, function(x, y) { return x + y})

// En ES6 : parámetros por defecto

const saludar = function (name = 'amigo') {
    console.log('Hola', name)
}

saludar()
saludar('Pepe')

// En ES6 spread operator

const saludarVarios = function (name = 'amigo', ...otros) {
    console.log('Hola', name)
    console.log(otros)
}

saludarVarios('Pepe', 'Juan', 'Luis')

// En ES6 : arrow functions

// const saludarA = (name) => {console.log('Hola', name)}
const saludarA = name => console.log('Hola', name)
saludarA('Carlos')

// calcular(12, 15, function(x, y) { return x + y})
calcular(12, 15, (x, y) => x + y)