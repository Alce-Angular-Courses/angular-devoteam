let x
// Z es un number -> inmutable
const z = 23
// o es un objeto -> mutable
const o = { user: 'Pepe', edad: 23 }

x = 12
// z = 9 Error 
o.puesto = 'Jefe'
// o = {} Error
console.log(o)
