const $primaFila = document.querySelector(".prima-fila");
const $secondaFila = document.querySelector(".seconda-fila");
const $terzaFila = document.querySelector(".terza-fila");
const $primaFilaCaselle = $primaFila.querySelectorAll(".numero-scheda");
const $secondaFilaCaselle = $secondaFila.querySelectorAll(".numero-scheda");
const $terzaFilaCaselle = $terzaFila.querySelectorAll(".numero-scheda");
const $numeroScheda = document.querySelectorAll(".numero-scheda");

let numbers = [];

for (let i = 0; i < 90; i++) {
    numbers.push(i + 1);
}

let numbersShuffle = [...numbers];


numbersShuffle.sort(() => {
    return 0.5 - Math.random();
})


numbersShuffle.splice(15, numbersShuffle.length - 1);

numbersShuffle.sort((num, num2) => num < num2 ? -1 : 0)



let arrayPF = [...$primaFilaCaselle];
let arraySF = [...$secondaFilaCaselle];
let arrayTF = [...$terzaFilaCaselle];


arrayPF.sort(() => {
    return 0.5 - Math.random();
})
arraySF.sort(() => {
    return 0.5 - Math.random();
})
arrayTF.sort(() => {
    return 0.5 - Math.random();
})

console.log(arrayPF);

let coun = 0;
numbersShuffle.forEach((number)=> {
    if (coun < 5) {
        arrayPF[coun].innerHTML = number;
        coun++
    } else if (coun < 10) {
        arraySF[coun - 5].innerHTML = number;
        coun++
    } else if (coun < 15) {
        arrayTF[coun - 10].innerHTML = number;
        coun++
    }
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