/* Constants */
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
/* Game Logic Variables and State */
let solution = [];
let guesses = [];
let round = 1;
/* DOM References */
let solutionOne = document.querySelector("#solution-one");
let solutionTwo = document.querySelector("#solution-two");
let solutionThree = document.querySelector("#solution-three");
let options = document.querySelectorAll(".option");
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
    //console.log(solution);
};
randomizeColors();
pickColor = (event) => {
    //lots of work to be done in here to check the guess
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
        }
    }
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
        if (round === 1) {
            let clueOne = document.querySelector("#row-one .clue-one");
            let clueTwo = document.querySelector("#row-one .clue-two");
            let clueThree = document.querySelector("#row-one .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 2) {
            let clueOne = document.querySelector("#row-two .clue-one");
            let clueTwo = document.querySelector("#row-two .clue-two");
            let clueThree = document.querySelector("#row-two .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 3) {
            let clueOne = document.querySelector("#row-three .clue-one");
            let clueTwo = document.querySelector("#row-three .clue-two");
            let clueThree = document.querySelector("#row-three .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 4) {
            let clueOne = document.querySelector("#row-four .clue-one");
            let clueTwo = document.querySelector("#row-four .clue-two");
            let clueThree = document.querySelector("#row-four .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 5) {
            let clueOne = document.querySelector("#row-five .clue-one");
            let clueTwo = document.querySelector("#row-five .clue-two");
            let clueThree = document.querySelector("#row-five .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 6) {
            let clueOne = document.querySelector("#row-six .clue-one");
            let clueTwo = document.querySelector("#row-six .clue-two");
            let clueThree = document.querySelector("#row-six .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 7) {
            let clueOne = document.querySelector("#row-seven .clue-one");
            let clueTwo = document.querySelector("#row-seven .clue-two");
            let clueThree = document.querySelector("#row-seven .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 8) {
            let clueOne = document.querySelector("#row-eight .clue-one");
            let clueTwo = document.querySelector("#row-eight .clue-two");
            let clueThree = document.querySelector("#row-eight .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black")
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white")
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black")
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white")
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black")
                //console.log("you win")
                revealSolution();
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white")
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white")
            };
        }; 
        if (round === 9) {
            let clueOne = document.querySelector("#row-nine .clue-one");
            let clueTwo = document.querySelector("#row-nine .clue-two");
            let clueThree = document.querySelector("#row-nine .clue-three");
            if (blackSquares === 1 && whiteSquares === 0){
                clueOne.classList.add("black");
                lose()
            } else if (blackSquares === 1 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                lose()
            } else if (blackSquares === 1 && whiteSquares === 2) {
                clueOne.classList.add("black");
                clueTwo.classList.add("white");
                clueThree.classList.add("white");
                lose()
            } else if (blackSquares === 2 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                lose()
            } else if (blackSquares === 2 && whiteSquares === 1) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("white");
                lose()
            } else if (blackSquares === 3 && whiteSquares === 0) {
                clueOne.classList.add("black");
                clueTwo.classList.add("black");
                clueThree.classList.add("black");
                //console.log("you win")
                win();
            } else if (blackSquares === 0 && whiteSquares === 1) {
                clueOne.classList.add("white");
                lose()
            } else if (blackSquares === 0 && whiteSquares === 2) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                lose()
            } else if (blackSquares === 0 && whiteSquares === 3) {
                clueOne.classList.add("white");
                clueTwo.classList.add("white");
                clueThree.classList.add("white");
                lose()
            }; 
            revealSolution();
        }; 
        guesses = [];
        round++;
        //console.log(`ROUND ${round}`)
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
    squares.forEach(square => {
        //let attribute = square.getAttribute("class");
        square.classList.remove("black");
        square.classList.remove("white")
    })
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
    });
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