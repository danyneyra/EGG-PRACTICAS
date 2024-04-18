
function total(){
    let totalApagar = 0
    // Comprobar producto
    let product = document.getElementById("product").value
    let product_price = 0
    if (product == 'keyboard'){
        
        product_price = 150
    } else if (product == 'mouse'){
        product_price = 50
    }

    console.log('Product: ' + product)
    console.log('Price: ' + product_price)

    // Comprobar cantidad
    let quantity = Number(document.getElementById("quantity").value)
    console.log('Quantity: ' + quantity)
    totalApagar = product_price * quantity

    let monto = document.getElementById("monto")
    monto.innerHTML = totalApagar
    console.log('Totla: ' + totalApagar)

}