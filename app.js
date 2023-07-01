// Rock, Paper, or Scissors

// Computer's Play - Randomly Display Rock, Paper, or Scissors
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3); // Gets a random number 0, 1, or 2
    let computerChoice; // Stores the computer's choice (Rock, Paper, or Scissors)
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1: 
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "Oops, Something's Wrong!";
            break;
    }
    return computerChoice;
}

//console.log(getComputerChoice());

// Play a Single Game of Rock, Paper, or Scissors Between Player and Computer
let singleGame = (playerSelection, computerSelection) => {
    // If Player Selects Rock
    if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "rock")) {
        return "Draw";
    }
    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) {
        return "You Win!";
    }
    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
        return "You Lose!";
    }

    // If Player Selects Paper
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "paper")) {
        return "Draw";
    }
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock")) {
        return "You Win!";
    }
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors")) {
        return "You Win!";
    }

    // If Player Selects Scissors
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "scissors")) {
        return "Draw";
    }
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock")) {
        return "You Lose!";
    }
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) {
        return "You Win!";
    }

    // Scissors Beats Paper
    // Paper Beats Rock
    // If playerSelection is equal to computerChoice Then Draw
}

let playerSelection = prompt("Please Enter Rock, Paper, or Scissors"); // Ask Player to Enter their Choice
let computerSelection = getComputerChoice(); // Get the Computer's Selection from the computerChoice function

console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`)
console.log(singleGame(playerSelection, computerSelection)); // Play a Single Game