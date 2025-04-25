console.log("Hello World");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  let numberToString =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors;";

  console.log(numberToString);
  return String;
}

getComputerChoice();
console.log(getComputerChoice());
