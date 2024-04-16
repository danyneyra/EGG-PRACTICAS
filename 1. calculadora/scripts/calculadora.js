function operacion(num1, num2, oper){

    num1 = Number(num1)
    num2 = Number(num2)

    console.log("Operación: " + oper)
    if(oper == "+"){
        console.log("Operación: Suma")
        total = num1 + num2
    }
    else if(oper == "-"){
        console.log("Operación: Sustracción")
        total = num1 - num2
    }
    else if(oper == "x"){
        console.log("Operación: Multiplicación")
        total = num1 * num2
    }
    else if(oper == "/"){
        console.log("Operación: División")
        total = num1 / num2
    }

    return String()
}

function calculadora(){
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    let oper = document.getElementById("oper").value
    let totalvalor = document.getElementById("total")

    let total = operacion(num1, num2, oper)
    totalvalor.innerHTML = "Total: " + total

}