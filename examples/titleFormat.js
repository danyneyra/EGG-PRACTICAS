function titleFormat (texto){
    //Seleccionando la primera letra
    primeraLetra = texto.charAt(0)
    //Selecciona resto de la cadena
    restoCadena = texto.slice(1, texto.length)
    //Convertir mayuscula a primer letra
    primeraLetra = primeraLetra.toUpperCase()
    //Convertir el resto en minuscula
    restoCadena = restoCadena.toLowerCase()

    //concatenando
    let nuevotexto = primeraLetra+restoCadena

    return nuevotexto
}
//FUncion titleFormat
console.log("-------------------")
console.log("Función titleFormat")
console.log("-------------------")
console.log(titleFormat("hello world"))
console.log(titleFormat("HELLO world"))
console.log(titleFormat("HellO WOrLd")) 