const infoComic = document.querySelector(".info-comic")
const cardPersonajes = document.querySelector(".card-personajes")

console.log(infoComic)

infoComic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    <p>Género: ${comic.genero}</p>
`
console.log(comic.personajes)

comic.personajes.forEach( char => {
    //Crear elementos dinámicamente con JavaScript
    const div = document.createElement("div")
    div.classList.add("personaje")
    div.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
    `
    cardPersonajes.appendChild(div)
    
});