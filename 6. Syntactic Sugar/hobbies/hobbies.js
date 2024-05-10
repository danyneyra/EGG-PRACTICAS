let enPareja = ["Viajar", "Picnic", "Cocinar", "Correr", "Juegos de Mesa"]
let conAmigos = ["Fútbol", "Parrilladas", "Fiesta", "Videojuegos", "Viajar"]
let conFamilia = ["Realizar Manualidades", "Visitar parques", "Organizar picnis", "Ir de excursiones", "Es nadar"]

const [, , tres, , ] = enPareja
const [, , , cuarto, ] = conFamilia

strHtml = `Uno de los hobbies favoritos en pareja es <b>${tres}</b> y uno de los hobbies favoritos en familia es <b>${cuarto}</b></b>`

document.getElementById('hobbies-seleccionados').innerHTML = strHtml

//Todos los hobbies
let todosHobies = [...enPareja, ...conAmigos, ...conFamilia]
console.log(todosHobies)

//Algunos hobbies
const [, , tresPareja, CuatroPareja , ] = enPareja
const [primeroFamilia, ...restoFamilia ] = conFamilia
const [primeroAmigos, ...restoAmigos ] = conAmigos

let algunosHobbies = [tresPareja, CuatroPareja, primeroAmigos, primeroFamilia]

console.log(algunosHobbies)