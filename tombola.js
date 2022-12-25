const $allNumbersContainer = document.querySelector(".numbers-container");
const $button = document.querySelector("button");
const $bestemmia = document.querySelector(".bestemmia");
const $bigNumContainer = document.querySelector(".current-number");

let bestemmie = ["Dio Porco", "Dio Gallina", "Diu Smarmittatu", "Porco il Cristo", "Buttana La Madonna", 
"Ma che oooh!", "Se non bestemmio, guarda!", "Cristu Crastu", "Madonna Avvelenata", "Diu Bastardu", "Dio becco", "porco Gesù",
"Bastardo san Giuseppe", "Dio Maiale", "Madonna Sverginata", "Gesu crasto", "Agnello di Dio, Becco di Dio"]

let numbers = [];

for (let i = 0; i < 90; i++) {
    numbers.push(i + 1);
}

let numbersShuffle = [...numbers];

numbersShuffle.sort(() => {
    return 0.5 - Math.random();
})

let counter = 0;

function seeNumber() {
    numbersShuffle[counter]
}

let html = numbers.map((number) => {
   return `<div class="number">${number}</div>`
}).join("");

$allNumbersContainer.innerHTML = html;

$button.addEventListener("click", () => {
    if (numbersShuffle[counter]) {
        $bigNumContainer.innerHTML = numbersShuffle[counter];
        $bestemmia.innerHTML = bestemmie[Math.ceil(Math.random() * (bestemmie.length - 1))];
        let thisNumbers = document.querySelectorAll(".number");
        thisNumbers.forEach((number) => {
            if (number.innerHTML == numbersShuffle[counter]) {
                number.classList.add("number-selected")
            }
        })
        counter ++;
    }
})