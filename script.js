/* Constants */
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* Game Logic Variables and State */
canvas.setAttribute("height", getComputedStyle(canvas)["height"])
canvas.setAttribute("width", getComputedStyle(canvas)["width"])

let solution = [];
let guesses = [];
let round = 1;
/* DOM References */
let solutionOne = document.querySelector("#solution-1");
let solutionTwo = document.querySelector("#solution-2");
let solutionThree = document.querySelector("#solution-3");
let options = document.querySelectorAll(".option");
let undo = document.querySelector("#undo");
let reset = document.querySelector("#new-game");
let check = document.querySelector("#check");
let circles = document.querySelectorAll(".game-board .circle");
let squares = document.querySelectorAll(".game-board .square");
let answer = document.querySelectorAll(".solution .circle");
let instructBtn = document.querySelector("#instructions");
let instructions = document.querySelector(".instructions")
// let message = document.querySelector("#message");
let winlose = document.querySelector(".winlose");
let game = document.querySelector(".game");
let okay = document.querySelectorAll(".ok");
let winImg = document.getElementById("win");
let loseImg = document.getElementById("lose");
let set;
/* Functions and Game Logic */
clearing = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
};
canvasing = (outcome) => {
    clearing();
    let randomX = Math.floor(Math.random() * 100);
    let randomY = Math.floor(Math.random() * 500 );
    console.log(randomX, randomY);
    ctx.drawImage(outcome, randomX, randomY);
};
win = () => {
    set = setInterval(canvasing, 300, winImg);
    revealSolution();
    game.classList.add("hidden");
    winlose.classList.remove("hidden");
};
lose = () => {
    set = setInterval(canvasing, 300, loseImg);
    revealSolution();
    game.classList.add("hidden");
    winlose.classList.remove("hidden");
};
toggleHome = () => {
    clearInterval(set);
    winlose.classList.add("hidden");
    game.classList.remove("hidden");
};
canvas.addEventListener("click", toggleHome);
randomizeColors = () => {
    for(i = 0; i < 3; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        while(solution.includes(color)){
            color = colors[Math.floor(Math.random() * colors.length)];
        }; 
        solution.push(color);
    };
    console.log(solution);
};
randomizeColors();
pickColor = (event) => {
    let color = event.target.id;
    let guess = document.querySelector(`#row-${round} .guess-${guesses.length +1}`);
    addColor = (guess) => {
        guess.classList.remove("empty");
        guess.classList.add(color);
        guesses.push(color);
    };
    if (guesses.length === 0){
        addColor(guess);
    } else if (guesses.length === 1){
        addColor(guess);
    } else if (guesses.length === 2){
        addColor(guess);
    };
};
undoPick = () => {
    let guess = document.querySelector(`#row-${round} .guess-${guesses.length}`);
    if (guesses.length === 3){
        guess.classList.remove(`${guesses[2]}`);
        guess.classList.add("empty");
    } else if (guesses.length === 2){
        guess.classList.remove(`${guesses[1]}`);
        guess.classList.add("empty");
    } else if (guesses.length === 1){
        guess.classList.remove(`${guesses[0]}`);
        guess.classList.add("empty");
    };
    guesses.pop();
};
black = (clue) => {
    clue.classList.add("black")
};
white = (clue) => {
    clue.classList.add("white")
};
checkGuess = () => {
    if (guesses.length === 3) {
        let blackSquares = 0;
        let whiteSquares = 0;
        if (guesses.includes(solution[0])) {
            if (solution.indexOf(solution[0]) === guesses.indexOf(solution[0])){
                blackSquares++;
            } else {
                whiteSquares++;
            };
        }; 
        if (guesses.includes(solution[1])) {
            if (solution.indexOf(solution[1]) === guesses.indexOf(solution[1])){
                blackSquares++;
            } else {
                whiteSquares++;
            };
        }; 
        if (guesses.includes(solution[2])) {
            if (solution.indexOf(solution[2]) === guesses.indexOf(solution[2])){
                blackSquares++;
            } else {
                whiteSquares++;
            };
        }; 
        
        let clueOne = document.querySelector(`#row-${round} .clue-1`);
        let clueTwo = document.querySelector(`#row-${round} .clue-2`);
        let clueThree = document.querySelector(`#row-${round} .clue-3`);
        const clues = [clueOne, clueTwo, clueThree]
        for (i = 0; i < blackSquares; i++) {
            black(clues[i]);
        };
        for (i = blackSquares; i < whiteSquares + blackSquares; i++) {
            white(clues[i]);
        };
        if (blackSquares === 3) {
            win();
            // revealSolution();
        } else if (round === 9) {
            lose();
            // revealSolution();
        } else {
            guesses = [];
            round++;
        }
    };
};
revealSolution = () => {
    solutionOne.classList.add(solution[0]);
    solutionTwo.classList.add(solution[1]);
    solutionThree.classList.add(solution[2]);
};
instruct = () => {
    game.classList.add("hidden");
    instructions.classList.remove("hidden")
};
oK = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    grandparent.classList.add("hidden");
    game.classList.remove("hidden");
};
resetGame = () => {
    round = 1;
    solution = [];
    guesses = [];
    circles.forEach(circle => {
        let attribute = circle.getAttribute("class")
        circle.classList.add("empty")
        colors.forEach(color => {
            if (attribute.includes(`${color}`)) {
                circle.classList.remove(`${color}`);
            };
        })
    });
    squares.forEach(square => {
        square.classList.remove("black");
        square.classList.remove("white")
    });
    answer.forEach(circle => {
        let attribute = circle.getAttribute("class")
        colors.forEach(color => {
            if (attribute.includes(`${color}`)) {
                circle.classList.remove(`${color}`);
            };
        });
    });
    randomizeColors();
};
/* Event Listeners */
options.forEach(option => {
    option.addEventListener("click", pickColor);
});
reset.addEventListener("click", resetGame);
check.addEventListener("click", checkGuess);
undo.addEventListener("click", undoPick);
instructBtn.addEventListener("click", instruct)
okay.forEach(btn => {
    btn.addEventListener("click", oK);
});