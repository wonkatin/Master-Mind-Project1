/* Constants */
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
/* Game Logic Variables and State */
let solution = [];
let guesses = [];
let round = 1;
/* DOM References */
// let reveal = document.querySelector(".solution");
let solutionOne = document.querySelector("#solution-one");
let solutionTwo = document.querySelector("#solution-two");
let solutionThree = document.querySelector("#solution-three");
let options = document.querySelectorAll(".option");
let reset = document.querySelector("#new-game");
let check = document.querySelector("#check");
let circles = document.querySelectorAll(".game-board .circle");
let answer = document.querySelectorAll(".solution .circle");
/* Functions and Game Logic */
randomizeColors = () => {
    for(i = 0; i < 3; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        while(solution.includes(color)){
            color = colors[Math.floor(Math.random() * colors.length)];
        } 
        solution.push(color);
    }
    console.log(solution);
};
randomizeColors();
pickColor = (event) => {
    let color = event.target.id;
    if (round === 1) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-one .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-one .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-one .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 2) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-two .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-two .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-two .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 3) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-three .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-three .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-three .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 4) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-four .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-four .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-four .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 5) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-five .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-five .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-five .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 6) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-six .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-six .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-six .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 7) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-seven .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-seven .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-seven .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 8) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-eight .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-eight .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-eight .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            round ++;
            console.log(round);
            guesses = [];
        }
    } else if (round === 9) {
        if (guesses.length === 0) {
            let guess = document.querySelector("#row-nine .guess-one");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 1){
            let guess = document.querySelector("#row-nine .guess-two");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
        } else if (guesses.length === 2){
            let guess = document.querySelector("#row-nine .guess-three");
            guess.classList.remove("empty");
            guess.classList.add(color)
            guesses.push(color);
            console.log(round);
            revealSolution();
            guesses = [];
        }
    } 
};
checkGuess = () => {
    //check if solution[0] is == to array index, use indexOf()
    //also check if solution inluces arrayindex. use includes()
};
revealSolution = () => {
    solutionOne.classList.add(solution[0]);
    solutionTwo.classList.add(solution[1]);
    solutionThree.classList.add(solution[2]);
};
resetGame = () => {
    round = 1;
    solution = [];
    circles.forEach(circle => {
        circle.classList.add("empty")
        let attribute = circle.getAttribute("class")
        if (attribute.includes("red")) {
            circle.classList.remove("red")
        }
        if (attribute.includes("orange")) {
            circle.classList.remove("orange")
        }
        if (attribute.includes("yellow")) {
            circle.classList.remove("yellow")
        }
        if (attribute.includes("green")) {
            circle.classList.remove("green")
        }
        if (attribute.includes("blue")) {
            circle.classList.remove("blue")
        }
        if (attribute.includes("purple")) {
            circle.classList.remove("purple")
        }
    });
    answer.forEach(circle => {
        let attribute = circle.getAttribute("class")
        if (attribute.includes("red")) {
            circle.classList.remove("red")
        }
        if (attribute.includes("orange")) {
            circle.classList.remove("orange")
        }
        if (attribute.includes("yellow")) {
            circle.classList.remove("yellow")
        }
        if (attribute.includes("green")) {
            circle.classList.remove("green")
        }
        if (attribute.includes("blue")) {
            circle.classList.remove("blue")
        }
        if (attribute.includes("purple")) {
            circle.classList.remove("purple")
        }
    })
    randomizeColors();
};
/* Event Listeners */
options.forEach(option => {
    option.addEventListener("click", pickColor);
});
reset.addEventListener("click", resetGame);
check.addEventListener("click", checkGuess);

// if (circle.classList.includes("red")){
//     circle.classList.remove("red");
//     circle.classList.add("empty");
//     console.log(circle);
// }