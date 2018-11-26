
const o = {
    name : 'Pepe',
    saludar: function () {console.log('Hola soy', this.name )},
    saludarAsinc: function  () {
        setTimeout( function() {console.log('Hola soy', this.name )}, 1000)
    },
    saludarAsincA: function  () {
        setTimeout( () => {console.log('Hola soy', this.name )}, 1000)
    }

}

o.saludar()
o.saludarAsinc()
o.saludarAsincA()

