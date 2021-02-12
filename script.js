/* Constants */
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
/* Game Logic Variables and State */
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
let hidden = document.querySelector("#hidden");
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
    let guess = document.querySelector(`#row-${round} .guess-${guesses.length +1}`);
    addColor = (guess) => {
        guess.classList.remove("empty");
        guess.classList.add(color);
        guesses.push(color);
    }
    if (guesses.length === 0){
        addColor(guess);
    } else if (guesses.length === 1){
        addColor(guess);
    } else if (guesses.length === 2){
        addColor(guess);
    };
    console.log(guesses)
};
undoPick = () => {
    // guesses.pop();
    let guess = document.querySelector(`#row-${round} .guess-${guesses.length}`);
    let picks = document.querySelectorAll(`#row-${round} .circle`);
    if (guesses.length === 3){
        guess.classList.remove(`${guesses[2]}`);
        guess.classList.add("empty")
    } else if (guesses.length === 2){
        guess.classList.remove(`${guesses[1]}`);
        guess.classList.add("empty")
    } else if (guesses.length === 1){
        guess.classList.remove(`${guesses[0]}`);
        guess.classList.add("empty")
    };
    guesses.pop();
    console.log(guesses)
};
black = (clue) => {
    clue.classList.add("black")
};
white = (clue) => {
    clue.classList.add("white")
};
checkGuess = () => {
    //console.log(guesses);
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
            revealSolution();
        } else if (round === 9) {
            lose();
            revealSolution();
        };
        guesses = [];
        round++;
    } 
};

revealSolution = () => {
    solutionOne.classList.add(solution[0]);
    solutionTwo.classList.add(solution[1]);
    solutionThree.classList.add(solution[2]);
};
win = () => {
    hidden.classList.add("winlose");
    hidden.innerText = "YOU WIN!!!"
};
lose = () => {
    hidden.classList.add("winlose");
    hidden.innerText = "YOU LOSE!!!"
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
    })
    answer.forEach(circle => {
        let attribute = circle.getAttribute("class")
        colors.forEach(color => {
            if (attribute.includes(`${color}`)) {
                circle.classList.remove(`${color}`);
            };
        })
    });
    hidden.classList.remove("winlose")
    hidden.innerText = "";
    randomizeColors();
};
/* Event Listeners */
options.forEach(option => {
    option.addEventListener("click", pickColor);
});
reset.addEventListener("click", resetGame);
check.addEventListener("click", checkGuess);
undo.addEventListener("click", undoPick);