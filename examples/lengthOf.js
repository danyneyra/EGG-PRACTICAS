function lengthOf(texto){
    let longitud
    if (texto == ""){
        longitud = "Invalid input"
    } else{
        longitud = texto.length
    }

    return longitud
}
console.log("----------------")
console.log("Función lengthOf")
console.log("----------------")
console.log(lengthOf("hello")) //debe imprimir 5 y 
console.log(lengthOf("")) //debe imprimir  “Invalid input”