
class Product {
    constructor(id, title, price, stock, image, onsale, supplier){
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.image = image
        this.onsale = onsale

        this._supplier = supplier
    }

    sellUnits(units) {
		this.stock = this.stock - units
	}

    get getSupplier() {
        return this._supplier;
    }

    set setSupplier(newName) {
        this._supplier = newName;
    }
}

const prod1 = new Product()
prod1.id = 1
prod1.title = "Xiaomi Redmi Note 13"
prod1.price = "1300"
console.log(prod1)

const prod2 = new Product()
prod2.id = 2
prod2.title = "iPhone 15 Pro"
prod2.price = "2300"
console.log(prod2)

const prod3 = new Product()
prod3.id = 3
prod3.title = "Samsung S24+"
prod3.price = "2100"
console.log(prod3)

const prod4 = new Product()
prod4.id = 4
prod4.title = "Motorola G5"
prod4.price = "335"
//Seteando el proveedor
prod4.setSupplier = "TECH PERU S.A.C"
//Obteniendo el Proveedor
let supplier =  prod4.getSupplier
console.log(prod4)
console.log('El proveedor del producto 4 es: ' + supplier)

const prod5 = new Product()
prod5.id = 5
prod5.title = "Google Pixel 8"
prod5.price = "1900"
prod5.stock = 20
//vendemos 10 unidades
prod5.sellUnits(10)
//vendemos 5 unidades
prod5.sellUnits(5)

console.log(prod5)
//Obteniendo stock del producto 5
console.log('Hay ' + prod5.stock + ' unidades del producto 5')





