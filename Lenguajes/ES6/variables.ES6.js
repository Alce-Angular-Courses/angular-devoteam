let x = 14
console.log(x)

function algo() {
    let z = 23
    {
        let z = 65
        console.log('En el bloque z vale:', z)
    }
    console.log('En la funcion z vale:', z)
    console.log(x)
}

algo()

// Error z no declarado console.log(z)