function operacion(num1, num2, oper){
    let total
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
    else if(oper == "^"){
        console.log("Operación: Potencia")
        total = num1
        for (let index = 1; index < num2; index++) {
            total = total * num1
        }
    }
    else if(oper == "√"){
        console.log("Operación: Raíz Cuadrada")
        total = Math.sqrt(num1)
    }
    else if(oper == "3√"){
        console.log("Operación: Raiz Cúbica")
        total = Math.cbrt(num1)
    }
    return total
}

function calculadora(){
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    let oper = document.getElementById("oper").value
    let totalvalor = document.getElementById("total")

    let total = operacion(num1, num2, oper)
    totalvalor.innerHTML = "Total: " + total

    document.querySelectorAll
}