// Rock, Paper, or Scissors

// Computer's Play - Randomly Display Rock, Paper, or Scissors
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3); // Gets a random number 0, 1, or 2
    let computerChoice; // Stores the computer's choice (Rock, Paper, or Scissors)
    switch (randomNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1: 
            computerChoice = "Paper";
            break;
        case 2: 
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "Oops, Something's Wrong!";
            break;
    }
    return computerChoice;
}

console.log(getComputerChoice());