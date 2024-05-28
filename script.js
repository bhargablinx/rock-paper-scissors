function getComputerChoice() {
  const num = Math.random();
  if (num <= 0.3) {
    return "Rock";
  } else if (num < 0.6 && num > 0.3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ");
  choice = choice.toUpperCase();
  if (choice === 'ROCK') {
    return "Rock";
  } else if (choice === 'PAPER') {
    return "Paper";
  } else if (choice === 'SCISSORS') {
    return "Scissors";
  } else {
    return "Invalid input";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore++;
        console.log("You Win! Rock beats Scissors");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++;
        console.log("You Loose! Paper beats Rock");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++;
        console.log("You Win! Paper beats Rock");
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        computerScore++;
        console.log("You Loose! Scissors beats Paper");
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        computerScore++;
        console.log("You Loose! Rock beats Scissors");
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore++;
        console.log("You Win! Scissors beats Paper");
    } else if (humanChoice == "Rock" && computerChoice == "Rock" ||
                humanChoice == "Paper" && computerChoice == "Paper" ||
                humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("Tie!")
    } else {
        console.log("Invalid input");
    }
}

const rock = document.querySelector(".btn-1");
rock.addEventListener('click',() => {
  playRound("Rock", getComputerChoice());
});

const paper = document.querySelector(".btn-2");
paper.addEventListener('click',() => {
  playRound("Paper", getComputerChoice());
});

const scissors = document.querySelector(".btn-3");
scissors.addEventListener('click',() => {
  playRound("Scissors", getComputerChoice());
});