game();

// run function that generates computer's input getComputerChoice
function getComputerChoice() {
    let computerSelection = (Math.random());
    if (computerSelection < (1/3)) {
        computerSelection = "Rock";
    } else if (computerSelection >= (1/3) && computerSelection < (2/3)) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    } 
    return computerSelection;
}

// run a function that continues until Player or CPU reaches 5 victories
function game() {

let playerScore = 0;
let cpuScore = 0;
while ((playerScore < 5) && (cpuScore < 5)) {

// prompt() user to input rock, paper or scissors; capitalize the input
let playerSelection = prompt("Input either 'Rock', 'Paper', or 'Scissors'");
playerSelection = (playerSelection.substring(0, 1).toUpperCase() + playerSelection.substring(1).toLowerCase());

// converting output of playRound into a single string and evaluating whether it's a "Win" or a "Lose" to keep score
let playRoundOutcome = (playRound(playerSelection, getComputerChoice()));
if (playRoundOutcome.includes("Win")) {
       playerScore++;
   } else if (playRoundOutcome.includes("Lose")) {
       cpuScore++;    
   }
console.log(playRoundOutcome);
console.log(`Player: ${playerScore} - CPU: ${cpuScore}`);

//run function that plays 1 round of RPS taking playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock") || (playerSelection === "Paper") || (playerSelection === "Scissors")) {
        // comparing playerSelection with computerSelection
        if (playerSelection === computerSelection) {
        x = `It's a tie! Player and CPU both picked ${playerSelection}.`;
    } else if 
         (((playerSelection === "Rock") && (computerSelection === "Scissors")) || 
         ((playerSelection === "Paper") && (computerSelection === "Rock")) ||
         ((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
         x = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
         x = `You Lose. CPU picked ${computerSelection}. ${computerSelection} beats ${playerSelection}.`;
    }
    }  else { x = "You did not enter 'Rock', 'Paper', or 'Scissors'. Please try again!";
    }
    return x;
    }
  }
  // announcing conclusion of the game
  let z = (playerScore > cpuScore) ?  "Congrats! You Won the Game!" : "Too Bad! CPU Won the Game!" ;
  console.log(z);
}


