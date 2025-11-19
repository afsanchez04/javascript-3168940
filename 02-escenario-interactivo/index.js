//1. Captura de variables
const jell = document.querySelectorAll(".jellyfish")
const tablero = document.querySelector("#contador-numero")
let counter = 0

console.log(jell, tablero)

//2. Funciones
jell.forEach( item => {
  

  item.addEventListener("click", () => {
    item.style.filter = "grayscale(1)"
    item.classList.add("saltar")
    counter++
    tablero.textContent = counter
  })


} )


//3. Eventos