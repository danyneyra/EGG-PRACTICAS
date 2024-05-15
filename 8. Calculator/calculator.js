let primerNumero = prompt("Ingresar primer número:")
let segundoNumero = prompt("Ingresar segundo número:")

dividir(primerNumero, segundoNumero, mostrarResultado)


function dividir(number1, number2, callback){
    let convertirNumero = Number(number1)
    let convertirNumero2 = Number(number2)
    if (isNaN(convertirNumero) || isNaN(convertirNumero2) ){
        alert('Error: Los parámetros deben ser númerocos')
    }else if (convertirNumero2 == 0){
        alert('Error: El segundo número ingresado es 0')
    }

    //Realizar operación
    const resultado = convertirNumero / convertirNumero2
    callback(resultado)
    
}

function mostrarResultado(resultado){
    console.log("El resultado de la división es:", resultado)
}