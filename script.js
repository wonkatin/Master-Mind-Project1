/* Constants */
const colors = ["red", "orange", "yellow", "green", "blue", "purple"]
/* Game Logic Variables and State */
let solution = ["blue", "green", "purple"]
/* DOM References */
let reveal = document.querySelector(".solution")
let solutionOne = document.querySelector("#solution-one")
let solutionTwo = document.querySelector("#solution-two")
let solutionThree = document.querySelector("#solution-three")
/* Functions and Game Logic */
//right now randomize function not fully operational
//need to figure how to get non-repeating colors
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
revealSolution = () => {
    solutionOne.classList.remove("empty");
    solutionTwo.classList.remove("empty");
    solutionThree.classList.remove("empty");
    // let colorOne = solution[0];
    // let colorTwo = solution[1];
    // let colorThree = solution[2];
    // solutionOne.classList.add(colorOne);
    // solutionTwo.classList.add(colorTwo);
    // solutionThree.classList.add(colorThree);
    solutionOne.classList.add(solution[0]);
    solutionTwo.classList.add(solution[1]);
    solutionThree.classList.add(solution[2]);
    //add class list= to the string in the index
}
//revealSolution();
/* Event Listeners */


