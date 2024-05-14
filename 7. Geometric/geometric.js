import { perimetroRectangulo } from "./perimeter.js"
import { areaRectangulo } from "./area.js"
import { rectangulos } from "./rectangleData.js"


function loadTable(){

    let nHTML = ''
    let strHtml = `<table>
    <tr>
        <th>Rectángulo</th>
        <th>Área</th>
        <th>Perímetro</th>
    </tr>`

    rectangulos.forEach( function(rectangulo) {
        nHTML = `<tr>
                    <td>Altura: ${rectangulo.altura}cm y Ancho: ${rectangulo.ancho}cm</td>
                    <td>${areaRectangulo(rectangulo.altura, rectangulo.ancho)} cm2</td>
                    <td>${perimetroRectangulo(rectangulo.altura, rectangulo.ancho)} cm2</td>
                </tr>`
        strHtml = strHtml + nHTML
    })

    strHtml = strHtml + '</table>'

    document.getElementById('main').innerHTML = strHtml
}

loadTable()