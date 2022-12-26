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

let internalCounter = 1;
let internalCounter10 = 1;
let internalCounter20 = 1;
let internalCounter30 = 1;
let internalCounter40 = 1;
let internalCounter50 = 1;
let internalCounter60 = 1;
let internalCounter70 = 1;
let internalCounter80 = 1;

for (i = 0; i <= numbersShuffle.length; i++) {
    if (numbersShuffle[i] < 10) {
        if (internalCounter > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter++
    } else if (numbersShuffle[i] < 20) {
        if (internalCounter10 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter10++
    } else if (numbersShuffle[i] < 30) {
        if (internalCounter20 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter20++
    } else if (numbersShuffle[i] < 40) {
        if (internalCounter30 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter30++
    } else if (numbersShuffle[i] < 50) {
        if (internalCounter40 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter40++
    } else if (numbersShuffle[i] < 60) {
        if (internalCounter50 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter50++
    } else if (numbersShuffle[i] < 70) {
        if (internalCounter60 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter60++
    } else if (numbersShuffle[i] < 80) {
        if (internalCounter70 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter70++
    } else if (numbersShuffle[i] <= 90) {
        if (internalCounter80 > 2) {
            numbersShuffle.splice(i, 1);
            i--
        }
        internalCounter80++
    }
}
numbersShuffle.splice(15, numbersShuffle.length - 1);

numbersShuffle.sort((num, num2) => num < num2 ? -1 : 0)

console.log(internalCounter, numbersShuffle);

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