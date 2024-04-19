
class Product {
    constructor(id, title, price, stock, image, onsale, supplier, colors, description){
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.image = image
        this.onsale = onsale
        this.colors = colors
        this.description = description

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

let seller = "TECH PERU S.A.C"

const prod1 = new Product()
prod1.id = 1
prod1.title = "Xiaomi Redmi Note 13"
prod1.price = "1300"
prod1.stock = 10
prod1.image = "https://promart.vteximg.com.br/arquivos/ids/7813003-1000-1000/image-1f96947bc68847c695552ac69b6ab8ef.jpg"
prod1.setSupplier = seller
prod1.colors = ["Negro", "Gris"]
prod1.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."

const prod2 = new Product()
prod2.id = 2
prod2.title = "iPhone 15"
prod2.price = "2800"
prod2.stock = 10
prod2.image = "https://mac-center.com.pe/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__COES_823x.jpg"
prod2.setSupplier = seller
prod2.colors = ["Negro", "Gris"]
prod2.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."


const prod3 = new Product()
prod3.id = 3
prod3.title = "Samsung S24+"
prod3.price = "2100"
prod3.stock = 10
prod3.image = "https://www.radioshackla.com/media/catalog/product/4/6/465217000012_00.jpg"
prod3.setSupplier = seller
prod3.colors = ["Negro", "Gris"]
prod3.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."


const prod4 = new Product()
prod4.id = 4
prod4.title = "Google Pixel 8"
prod4.price = "1950"
prod4.stock = 10
prod4.image = "https://unaluka.com/cdn/shop/files/pixel8negro_1200x1200.jpg"
prod4.setSupplier = seller
prod4.colors = ["Negro", "Gris"]
prod4.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."


const products = [prod1, prod2, prod3, prod4]

console.log("-- IMPRIMIENDO TODOS LOS ELEMENTOS --")
console.log(products)
console.log("-- IMPRIMIENDO ELEMENTO 2--")
console.log(products[1])
console.log("-- IMPRIMIENDO TITULO DEL ULTIMO ELEMENTO --")
console.log(products[products.length-1].title)

const prod5 = new Product()
prod5.id = 5
prod5.title = "iPad 10.2''"
prod5.price = "1590"
prod5.stock = 10
prod5.image = "https://mac-center.com.pe/cdn/shop/products/IMG-118291_c350d9ca-2bae-462b-b134-b0385c489f50_823x.jpg"
prod5.setSupplier = seller
prod5.colors = ["Negro", "Gris"]
prod5.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."


const prod6 = new Product()
prod6.id = 6
prod6.title = "Huawei Mate 40 Pro"
prod6.price = "2900"
prod6.stock = 10
prod6.image = "https://m.media-amazon.com/images/I/417E3gDr7PL.jpg"
prod6.setSupplier = seller
prod6.colors = ["Negro", "Gris"]
prod6.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."


//Agregar nuevo elemento a la lista, al inicio
products.unshift(prod5)
//Agregar nuevo elemento a la lista, al final
products.push(prod6)
console.log("-- IMPRIMIENDO ARRAY ACTUALIZADO --")
console.log(products)

//Eliminando primer elemento
products.shift()
//Eliminando último elemento
products.pop()
console.log("-- IMPRIMIENDO ARRAY ACTUALIZADO DESP DE ELIMINAR --")
console.log(products)
