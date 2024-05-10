class Person {
    constructor(name, age, profession, location, hobby){
        this.name = name
        this.age = age
        this.profession = profession
        this.location = location
        this.hobby = hobby
    }
}

let profile = new Person("Groguu", "50", "Yedi", 'Tython', 'Cazar')

let strHtml = `${profile.name} es un niño de ${profile.age} años, él será un futuro ${profile.profession}. Actualmente reside en el planeta de ${profile.location}
                , le gusta mucho ${profile.hobby}`

document.getElementById("profile").textContent = strHtml