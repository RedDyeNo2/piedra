function getComputedChoice() {
  // devuelve piedra papel o tiraje random
  let randomNumber = Math.floor(Math.random() * 3);
  // aca tira 0,1,2
  //   console.log(randomNumber);
  let string =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
  //   condicional para cada valor de random con un string

  return string;
}
// getComputedChoice();
// console.log(getComputedChoice());

function getHumanChoice() {
  let choice = prompt("Piedra, papel o tijera?");
  choice.toLowerCase();
  return choice;
}
// getHumanChoice();
let humanScore = 0;
let computerScore = 0;

// function playGame() {
//   playRound();
//   function playRound() {
//     console.log(getComputedChoice());
//   }
//   //   console.log(getHumanChoice());
// }

const playGame = function (getHumanChoice, getComputedChoice) {
  console.log(getHumanChoice, getComputedChoice);
};

// function playGame() {
//   playRound(getHumanChoice(), getComputedChoice());
//   playRound(getHumanChoice(), getComputedChoice());
//   playRound(getHumanChoice(), getComputedChoice());
//   playRound(getHumanChoice(), getComputedChoice());
//   playRound(getHumanChoice(), getComputedChoice());
//   function playRound(caseInsensitiveHC, computerChoice) {
//     // let caseInsensitiveHC = getHumanChoice;
//     // let computerChoice = getComputedChoice;
//     let checkWinRound;

//     if (caseInsensitiveHC === "piedra") {
//       if (caseInsensitiveHC === "piedra" && computerChoice === "papel") {
//         checkWinRound = "yes";
//       }
//       if (caseInsensitiveHC === "piedra" && computerChoice === "tijera") {
//         checkWinRound = "no";
//       }
//       if (caseInsensitiveHC === computerChoice) {
//       }
//     } else if (caseInsensitiveHC === "papel") {
//       if (caseInsensitiveHC === "papel" && computerChoice === "piedra") {
//         checkWinRound = "yes";
//       }
//       if (caseInsensitiveHC === "papel" && computerChoice === "tijera") {
//         checkWinRound = "no";
//       }
//       if (caseInsensitiveHC === computerChoice) {
//       }
//     } else if (caseInsensitiveHC === "tijera") {
//       if (caseInsensitiveHC === "tijera" && computerChoice === "papel") {
//         checkWinRound = "yes";
//       }
//       if (caseInsensitiveHC === "tijera" && computerChoice === "piedra") {
//         checkWinRound = "no";
//       }
//       if (caseInsensitiveHC === computerChoice) {
//       }
//     } else "menos una jugada por escribir mal";

//     let resultString = `You ${checkWinRound === "yes" ? "win" : "lose"}, ${
//       checkWinRound === "yes" ? caseInsensitiveHC : computerChoice
//     } beats ${checkWinRound === "yes" ? computerChoice : caseInsensitiveHC}`;
//   }
// }
playGame();
