const aDatos = []

console.log(aDatos)

// aDatos = [8,7,6,5,3,2,1] daría error

aDatos.push(1,8,7,6,5,3,2)
console.log(aDatos)

/* for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log(`El elemento ${i+1} del array vale ${item}`)
} */

aDatos.forEach((item, i) => {
    console.log(`El elemento ${i+1} del array vale ${item}`)
});

// const aDatosC = aDatos.map((item)=>{ return item * item})
const aDatosC = aDatos.map(item => item * item)
console.log(aDatosC)

// const aDatosP = aDatos.filter((item)=>{return !(item % 2)})
const aDatosP = aDatos.filter(item => !(item % 2))
console.log(aDatosP)