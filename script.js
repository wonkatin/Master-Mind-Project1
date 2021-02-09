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
let options = document.querySelectorAll(".option")
console.log(options)

/* Functions and Game Logic */
randomizeColors = () => {
    for(i = 0; i < 3; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        while(solution.includes(color)){
            color = colors[Math.floor(Math.random() * colors.length)];
        } 
        solution.push(color);
    }
};
randomizeColors();
console.log(solution);
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

options.forEach(option => {
    option.addEventListener("click", pickColor);
});
// options.addEventListener("click", pickColor);
