getAsinc = function(callback) {
    setTimeout ( () => {
        const o = {name: 'Carlos', edad: 25}
        callback (o)} , 3000)
}

getAsinc( (datos) => {console.log(datos)})

