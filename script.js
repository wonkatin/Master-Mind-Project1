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
let buttons = document.querySelector(".buttons");
let levels = document.querySelector(".choose");
let choose = document.querySelectorAll(".choose>button");
let options = document.querySelectorAll(".option");
let undo = document.querySelector("#undo");
let reset = document.querySelector("#new-game");
let check = document.querySelector("#check");
let gameBoard = document.querySelector(".game-board")
let rows = document.querySelectorAll(".row");
let circles = document.querySelectorAll(".game-board .circle");
let squares = document.querySelectorAll(".game-board .square");
let answer = document.querySelectorAll(".solution .circle");
let instructBtn = document.querySelector("#instructions");
let instructions = document.querySelector(".instructions")
let winlose = document.querySelector(".winlose");
let game = document.querySelector(".game");
let okay = document.querySelectorAll(".ok");
let winImg = document.getElementById("win");
let loseImg = document.getElementById("lose");
let set;
let gameLevel = 0;
/* Functions and Game Logic */
class gameRows {
    constructor(level){
        this.level = level
        this.rows = 9
    }
    createGameBoard(){
        for(let i = 0; i < this.rows; i++) {
            let row = document.createElement("div");
            let guessLevel = `guess-level-${this.level}`;
            let clueLevel = `clues-level-${this.level}`;
            row.id = `row-${i + 1}`;
            row.className = "grid row";
            gameBoard.appendChild(row);
            let guesses = document.createElement("div");
            guesses.className = guessLevel;
            row.appendChild(guesses);
            let clues =document.createElement("div");
            clues.className = clueLevel;
            row.appendChild(clues);
            for (let i = 0; i < this.level; i++){
                let circle = document.createElement("div");
                circle.className = `empty circle guess-${i + 1}`;
                guesses.appendChild(circle);
                let clue = document.createElement("div");
                clue.className = `square clue-${i +1}`;
                clues.appendChild(clue);
            }
        };
    };
    
};
loadBoard = (event) => {
    let level = event.target.id;
    gameLevel = level;
    buttons.classList.remove("hidden");
    levels.classList.add("hidden");
    let makeGame = new gameRows(level);
    makeGame.createGameBoard();
    randomizeColors();
};
clearing = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
};
canvasing = (outcome) => {
    clearing();
    let randomX = Math.floor(Math.random() * 100);
    let randomY = Math.floor(Math.random() * 470 );
    // console.log(randomX, randomY);
    ctx.drawImage(outcome, randomX, randomY);
};
win = () => {
    set = setInterval(canvasing, 200, winImg);
    revealSolution();
    game.classList.add("hidden");
    winlose.classList.remove("hidden");
};
lose = () => {
    set = setInterval(canvasing, 200, loseImg);
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
    for(i = 0; i < gameLevel; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        while(solution.includes(color)){
            color = colors[Math.floor(Math.random() * colors.length)];
        }; 
        solution.push(color);
    };
    console.log(solution);
};
pickColor = (event) => {
    let color = event.target.id;
    let guess = document.querySelector(`#row-${round} .guess-${guesses.length +1}`);
    addColor = (guess) => {
        guess.classList.remove("empty");
        guess.classList.add(color);
        guesses.push(color);
    };
    if (guesses.length < gameLevel){
        addColor(guess);
    };
};
undoPick = () => {
    let guess = document.querySelector(`#row-${round} .guess-${guesses.length}`);
    if (guesses.length === 4){
        guess.classList.remove(`${guesses[3]}`);
        guess.classList.add("empty");
    } else if (guesses.length === 3){
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
    if (guesses.length == gameLevel) {
        let blackSquares = 0;
        let whiteSquares = 0;
        for (let i = 0; i < gameLevel; i++){
            if (guesses.includes(solution[i])) {
                if (solution.indexOf(solution[i]) === guesses.indexOf(solution[i])){
                    blackSquares++;
                } else {
                    whiteSquares++;
                };
            }; 
        };
        let clues = [];
        for (let i = 0; i < gameLevel; i++){
            let clue = document.querySelector(`#row-${round} .clue-${i+ 1}`)
            clues.push(clue)
        }
        for (i = 0; i < blackSquares; i++) {
            black(clues[i]);
        };
        for (i = blackSquares; i < whiteSquares + blackSquares; i++) {
            white(clues[i]);
        };
        if (blackSquares == gameLevel) {
            win();
        } else if (round === 9) {
            lose();
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
    let gameBoard = document.querySelector(".game-board");
    let rows = document.querySelectorAll(".row");
    rows.forEach(child => {
        gameBoard.removeChild(child);
    });
    round = 1;
    solution = [];
    guesses = [];
    gameLevel = 0;
    buttons.classList.add("hidden");
    levels.classList.remove("hidden");
    answer.forEach(circle => {
        let attribute = circle.getAttribute("class")
        colors.forEach(color => {
            if (attribute.includes(`${color}`)) {
                circle.classList.remove(`${color}`);
            };
        });
    });
};
/* Event Listeners */
choose.forEach(choice => {
    choice.addEventListener("click", loadBoard)
});
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