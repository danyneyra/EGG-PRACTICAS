function palindrome(cadena){
    //rebanando cadena y convertiendole en lista
    let rebanado = cadena.split("")
    console.log(rebanado)
    //invirtiendo orden de lista
    let invertido = rebanado.reverse()
    console.log(invertido)
    //uniendo todos los valore de la lista
    let listaUnida = invertido.join("")
    console.log(listaUnida)
    //COmprobando si la cadena es igual a la original
    if (cadena == listaUnida){
        return true
    }else{
        return false
    }

}
//FUncion titleFormat
console.log("-------------------")
console.log("Función palindrome")
console.log("-------------------")
console.log(palindrome("hello")) //debe imprimir false mientras que
console.log(palindrome("hannah")) //debe imprimir true.