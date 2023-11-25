const body = document.querySelector("body");
let playerScore = 0;
let cpuScore = 0;

// add text with instructions to press one of the buttons (1st row)
const instructions = document.createElement("div");
instructions.textContent = "Please select 'Rock', 'Paper' or 'Scissors' to play.";
body.appendChild(instructions);

// add string that announces the outcome of each round (2nd row)
let playRoundResult = document.createElement("div");
body.appendChild(playRoundResult);

// add string that keeps track of the score (3rd row)
let scoreBoard = document.createElement("div");
scoreBoard.textContent = `Player: ${playerScore} CPU: ${cpuScore}`;
body.appendChild(scoreBoard);

// add string that announces the winner of a game (4th row)
let gameResult = document.createElement("div");
body.appendChild(gameResult);

// if the player clicks a button at the end of a game (when the gameResult has been announced), reset playerScore, cpuScore, and gameResult to "0"
let btn = document.querySelectorAll("button");
btn.forEach(function(i) {
    i.addEventListener('click', function( event ) {
    if (playerScore == 5 || cpuScore == 5) {
        playerScore = 0;
        cpuScore = 0; 
        playRoundResult.textContent = "";
        scoreBoard.textContent = `Player: ${playerScore} CPU: ${cpuScore}`;
        gameResult.textContent = "";
        event.stopImmediatePropagation();
        }
    })   
})


let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
playRound("Rock", getComputerChoice());
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
playRound("Paper", getComputerChoice());
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
playRound("Scissors", getComputerChoice());
});

// run function that generates computer's input getComputerChoice
function getComputerChoice() {
    let computerSelection = (Math.random());
    computerSelection = (computerSelection < (1/3)) ? "Rock"
                      : (computerSelection >= (1/3) && computerSelection < (2/3)) ? "Paper"
                      : "Scissors";
    return computerSelection;
}

  //run function that plays 1 round of RPS taking playerSelection and computerSelection
  function playRound(playerSelection, computerSelection) {
        // comparing playerSelection with computerSelection
        switch (true) {
            case (playerSelection === computerSelection):
                playRoundResult.textContent = `It's a tie! Player and CPU both picked ${playerSelection}.`;
                break;
            case (((playerSelection === "Rock") && (computerSelection === "Scissors")) || 
                  ((playerSelection === "Paper") && (computerSelection === "Rock")) ||
                  ((playerSelection === "Scissors") && (computerSelection === "Paper"))):
                playRoundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
                break;
            default:
                playRoundResult.textContent = `You Lose. CPU picked ${computerSelection}. ${computerSelection} beats ${playerSelection}.`;
                cpuScore++;
        }

        // updating the scoreBoard
        scoreBoard.textContent = `Player: ${playerScore} CPU: ${cpuScore}`;

        // checking whether to post the gameResult announcement and determining which one
        gameResult.textContent = (playerScore == 5) ? ("You won the game. Congrats!")
                               : (cpuScore == 5) ? ("CPU won the game. You lose!") 
                               : "";
  }
 
