const medusa1 = document.getElementById ("medusa1");
const medusa2 = document.getElementById ("medusa2");
const medusa3 = document.getElementById ("medusa3");
const medusa4 = document.getElementById ("medusa4");
const alga = document.getElementById ("alga");
const burbuja = document.getElementById ("burbuja");
const contadorNumero = document.getElementById("contador-numero");
const contador = document.getElementById("contador");

let totalClicks = 0;

function sumarContador() {
  totalClicks++;
  contadorNumero.textContent = totalClicks;
}

medusa1.addEventListener("click", sumarContador);
medusa2.addEventListener("click", sumarContador);
medusa3.addEventListener("click", sumarContador);
medusa4.addEventListener("click", sumarContador);

medusa1.addEventListener("click", () => {
    medusa1.classList.add("desaparecer");
  });

medusa2.addEventListener("click", () => {
    medusa2.classList.add("desaparecer");
  });

medusa3.addEventListener("click", () => {
    medusa3.classList.add("desaparecer");
  });

medusa4.addEventListener("click", () => {
    medusa4.classList.add("desaparecer");
  });


