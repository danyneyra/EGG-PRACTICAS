let misDatosFisicos = {
    "name": "Groguu",
    "age" : 50,
    "address": {
        "street" : "Calle Tatoine",
        "number" : 110,
        "city": "Tython"
    },
    "height": 34,
    "weight": 3,
    "hobby" : "cazar"
}

strHtml = `<h1>${misDatosFisicos.name}</h1>
            <p>Edad: ${misDatosFisicos.age} años</p>
            <p>Dirección: ${misDatosFisicos.address.street} ${misDatosFisicos.address.number}, ${misDatosFisicos.address.city} </p>
            <p>Altura: ${misDatosFisicos.height} cm</p>
            <p>Peso: ${misDatosFisicos.weight} kg</p>
            <p>Hobby: ${misDatosFisicos.hobby} </p>`



function printPre(id = "3"){
    console.log(id)
    document.getElementById('pre'+id).innerHTML = strHtml
}

printPre()