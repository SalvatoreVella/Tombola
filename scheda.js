const $primaFila = document.querySelector(".prima-fila");
const $secondaFila = document.querySelector(".seconda-fila");
const $terzaFila = document.querySelector(".terza-fila");
const $primaFilaCaselle = $primaFila.querySelectorAll(".numero-scheda");
const $secondaFilaCaselle = $secondaFila.querySelectorAll(".numero-scheda");
const $terzaFilaCaselle = $terzaFila.querySelectorAll(".numero-scheda");
const $numeroScheda = document.querySelectorAll(".numero-scheda");

let file = [
    [...$primaFilaCaselle],
    [...$secondaFilaCaselle],
    [...$terzaFilaCaselle]
]

for (let j = 0; j < 9; j++) {
    console.log($primaFila);
    $primaFilaCaselle[j].innerHTML = Math.floor(Math.random() * ((((j + 1) * 10) - 10) - (((j + 1) * 10) - 6)) + (((j + 1) * 10) - 6))
    $secondaFilaCaselle[j].innerHTML = Math.floor(Math.random() * ((((j + 1) * 10) - 6) - (((j + 1) * 10) - 3)) + (((j + 1) * 10) - 3))
    $terzaFilaCaselle[j].innerHTML = Math.floor(Math.random() * ((((j + 1) * 10)) - (((j + 1) * 10) - 3)) + (((j + 1) * 10) - 3))
}

$primaFilaCaselle[0].innerHTML = Math.ceil(Math.random() * 3);
$terzaFilaCaselle[8].innerHTML = Math.ceil(Math.random() * (90 - 86) + 86);

file[0].sort(() => {
    return 0.5 - Math.random();
})
file[1].sort(() => {
    return 0.5 - Math.random();
})
file[2].sort(() => {
    return 0.5 - Math.random();
})

file[0].splice(0, 5);
file[0].forEach(num => {
    num.innerHTML = "";
})

file[1].splice(0, 5);
file[1].forEach(num => {
    num.innerHTML = "";
})

file[2].splice(0, 5);
file[2].forEach(num => {
    num.innerHTML = "";
})

$numeroScheda.forEach(numero => {
    if (!numero.innerHTML) {
        numero.style.backgroundColor = "darkblue"
    }
    numero.addEventListener("click", () => {
        if (numero.innerHTML) {
            numero.classList.toggle("number-selected")
        }
    })
})