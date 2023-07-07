// Rock, Paper, or Scissors

// Common Variables
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');

// Disable Buttons After 5 Wins for Player or Computer
let disableButtons = () => {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

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

// Play a Single Game of Rock, Paper, or Scissors Between Player and Computer
let playGame = (playerSelection) => {
    let computerSelection = getComputerChoice(); // Get the Computer's Selection from the computerChoice function
    let result = "";

    // If Player Selects Rock
    if ((playerSelection === "rock") && (computerSelection === "rock")) {
        result = "Rock equals Rock, Draw!";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        result = "Rock Beats Scissors, You Win!";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        computerScore++;
        result = "Rock Looses to Paper, You Lose!";
    }

    // If Player Selects Paper
    else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        result = "Paper Equals Paper, Draw!";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        result = "Paper Beats Rock, You Win!";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        result = "Paper Loses to Scissors, You Lose!";
    }

    // If Player Selects Scissors
    else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        result = "Scissors Equals Scissors, Draw!";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        computerScore++;
        result = "Scissors Loses to Rocks, You Lose!";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        result = "Scissors Beats Paper, You Win!";
    }

    // Stop the Game After Someone Wins 5 Times
    if (playerScore == 5) {
        result = "You've Won the Best of 5! Refresh the Page to Play Again!";
        disableButtons();
    }
    else if (computerScore == 5) {
        result = "You've Lost the Best of 5! Refresh the Page to Play Again";
        disableButtons();
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("scores").innerHTML = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(button.innerHTML);
        // console.log(button.innerHTML);
    })
})


