/* Constants */
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
/* Game Logic Variables and State */
let solution = [];
let guesses = [];
/* DOM References */
let reveal = document.querySelector(".solution");
let solutionOne = document.querySelector("#solution-one");
let solutionTwo = document.querySelector("#solution-two");
let solutionThree = document.querySelector("#solution-three");
let options = document.querySelector(".options")
// let red = document.querySelector("#red");
// let orange = document.querySelector("#orange");
// let yellow = document.querySelector("#yellow");
// let green = document.querySelector("#green");
// let blue = document.querySelector("#blue");
// let purple = document.querySelector("#purple");

/* Functions and Game Logic */
randomizeColors = () => {
    for(i = 0; i < 3; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        if (!solution.includes(color)){
                    solution[i] = color;
        } 
    }
    console.log(solution)
}
randomizeColors();

pickColor = (event) => {
    let color = event.target.id;
    console.log(color);
    guesses.push(color);
    console.log(guesses);
    let guess = document.querySelector(".guess-one");
    guess.classList.remove("empty");
    guess.classList.add(color)
}
checkColor = () => {
    //check if solution[0] is == to array index, use indexOf()
    //also check if solution inluces arrayindex. use includes()
}
revealSolution = () => {
    solutionOne.classList.remove("empty");
    solutionTwo.classList.remove("empty");
    solutionThree.classList.remove("empty");
    solutionOne.classList.add(solution[0]);
    solutionTwo.classList.add(solution[1]);
    solutionThree.classList.add(solution[2]);
}
revealSolution();

/* Event Listeners */
options.addEventListener("click", pickColor);



// look at this code from bomb game

// wireState = {
//     blue: false,
//     green: false,
//     red: false,
//     white: false,
//     yellow: false,
//   };

//   // Randomly select which wires need to be cut
//   for (const color in wireState) {
//     // console.log(color);
//     let rand = Math.random(); // gives us a random float between 0.0 and 1.0
//     if (rand > 0.5) {
//       wiresToCut.push(color);
//     }
//   }
// }


// save a copy

// randomizeColors = () => {
//     for(i = 0; i < 3; i++) {
//         let color = colors[Math.floor(Math.random() * colors.length)];
//         if (!solution.includes(color)){
//                     solution[i] = color;
//         } 
//     }
//     console.log(solution)
// }
// randomizeColors();