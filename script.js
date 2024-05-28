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
  if (choice === "ROCK") {
    return "Rock";
  } else if (choice === "PAPER") {
    return "Paper";
  } else if (choice === "SCISSORS") {
    return "Scissors";
  } else {
    return "Invalid input";
  }
}

let counter = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  counter++;
  if (counter == 5) {
    displayWinner();
  }
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    humanScore++;
    result.textContent = "You Win! Rock beats Scissors";
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    computerScore++;
    result.textContent = "You Loose! Paper beats Rock";
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    humanScore++;
    result.textContent = "You Win! Paper beats Rock";
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    computerScore++;
    result.textContent = "You Loose! Scissors beats Paper";
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    computerScore++;
    result.textContent = "You Loose! Rock beats Scissors";
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    humanScore++;
    result.textContent = "You Win! Scissors beats Paper";
  } else {
    result.textContent = "Tie!";
  }
}

const result = document.querySelector(".result");

const rock = document.querySelector(".btn-1");
rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
  updateScore();
});

const paper = document.querySelector(".btn-2");
paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
  updateScore();
});

const scissors = document.querySelector(".btn-3");
scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
  updateScore();
});

const scoresHum = document.querySelector(".human");
const scoresCom = document.querySelector(".computer");

function updateScore() {
  scoresHum.textContent = `Human score: ${humanScore}`;
  scoresCom.textContent = `Computer score: ${computerScore}`;
}

const winner = document.querySelector("h1")

function checkWinner() {
  if (humanScore > computerScore)
    return "Human";
  else
    return "Computer";
}

function displayWinner() {
  winner.textContent = `Winner is ${checkWinner()}`;
}