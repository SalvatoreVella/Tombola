const $allNumbersContainer = document.querySelector(".numbers-container");
const $button = document.querySelector("button");
const $bigNumContainer = document.querySelector(".current-number");

let numbers = [];

for (let i = 0; i < 90; i++) {
    numbers.push(i + 1);
}

let numbersShuffle = [...numbers];

numbersShuffle.sort(() => {
    return 0.5 - Math.random();
})

let counter = 0;

let html = numbers.map((number) => {
   return `<div class="number">${number}</div>`
}).join("");

$allNumbersContainer.innerHTML = html;

$button.addEventListener("click", () => {
    if (numbersShuffle[counter]) {
        $bigNumContainer.innerHTML = numbersShuffle[counter];
        let thisNumbers = document.querySelectorAll(".number");
        thisNumbers.forEach((number) => {
            if (number.innerHTML == numbersShuffle[counter]) {
                number.classList.add("number-selected")
            }
        })
        counter ++;
    }
})
