getAsincPromise = function() {
   return new Promise( (resolve, reject) => {
       setTimeout ( () => {
            let n = parseInt(Math.random()*10)
            if (n < 8) {
                // Proceso OK
                const o = {name: 'Carlos', edad: 25}
                resolve(o)
            }
            else {
                // Error
                reject('Error de conexion')
            }
        } , 1000)
   })
}

 

getAsincPromise().then(
    (data) => {console.log(data)}
).catch(
    (error) => {console.log(error)}
)

