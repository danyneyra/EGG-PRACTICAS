function mathcito(number){

    //convertir variable a numero
    number = Number(number)

    //función Math.abs
    let resultado1 = Math.abs(number)
    console.log('El Valor Absoluto de ' + number + ' es: ' + resultado1)

    //función Math.ceil
    let resultado2 = Math.ceil(resultado1)
    console.log('El Redondeo hacia arriba de ' + resultado1 + ' es: ' + resultado2)

    //función Math.floor
    let resultado3 = Math.floor(resultado1)
    console.log('El Redondeo hacia abajo de ' + resultado1 + ' es: ' + resultado3)

    //función Math.Round
    let resultado4 = Math.floor(resultado1)
    console.log('El Redondeo más cercano de ' + resultado1 + ' es: ' + resultado4)
}

function mathArray(array){

    console.log("Lista de números: " + array)

    //función Math.Max
    let resultado1 = Math.max(...array)
    console.log('El número mayor de la lista es: ' + resultado1)

    let resultado2 = Math.min(...array)
    console.log('El número menor de la lista es: ' + resultado2)

    let resultado3 = Math.floor(Math.random() *100)
    console.log('Escogiendo un número al azar del 0 al 99: ' + resultado3)
}

mathcito(-5.92)
const listNumbers = [7, 6, 9, 1]

mathArray(listNumbers)