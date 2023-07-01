// Rock, Paper, or Scissors

// Common Variables
let playerScore = 0;
let computerScore = 0;

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
        return "Rock equals Rock, Draw!";
    }
    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        return "Rock Beats Scissors, You Win!";
    }
    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
        computerScore++;
        return "Rock Looses to Paper, You Lose!";
    }

    // If Player Selects Paper
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "paper")) {
        return "Paper Equals Paper, Draw!";
    }
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock")) {
        playerScore++;
        return "Paper Beats Rock, You Win!";
    }
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        return "Paper Loses to Scissors, You Lose!";
    }

    // If Player Selects Scissors
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "scissors")) {
        return "Scissors Equals Scissors, Draw!";
    }
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock")) {
        computerScore++;
        return "Scissors Loses to Rocks, You Lose!";
    }
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        return "Scissors Beats Paper, You Win!";
    }
}

// let playerSelection = prompt("Please Enter Rock, Paper, or Scissors"); // Ask Player to Enter their Choice
// let computerSelection = getComputerChoice(); // Get the Computer's Selection from the computerChoice function

// console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`)
// console.log(singleGame(playerSelection, computerSelection)); // Play a Single Game

// Play a Round of 5 Game With the Computer
let game = () => {
    for (var count=0; count<5; count++) {
        let playerSelection = prompt("Please Enter Rock, Paper, or Scissors"); // Ask Player to Enter their Choice
        let computerSelection = getComputerChoice(); // Get the Computer's Selection from the computerChoice function
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        console.log(singleGame(playerSelection, computerSelection));
    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
}

console.log(game());