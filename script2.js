const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  let string =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
  return string;
};
// console.log(getComputerChoice());

const getHumanChoice = function () {
  let choice = prompt("Piedra, papel o tijera?");
  choice = choice.toLowerCase();
  return choice;
};
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("tie");
  } else if (
    (humanChoice === "piedra" && computerChoice === "tijera") ||
    (humanChoice === "tijera" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "piedra")
  ) {
    alert("point for human");
  } else {
    alert("point for pc");
  }
};
playRound(getHumanChoice(), getComputerChoice());
