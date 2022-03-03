const cpuChoiceDisplay = document.getElementById("cpu-choice");
const plrChoiceDisplay = document.getElementById("plr-choice");
const gameResultDisplay = document.getElementById("result");
const nChoices = document.querySelectorAll("button");
let plrChoice;
let cpuChoice;
let gameResult;

nChoices.forEach((nChoice) =>
  nChoice.addEventListener("click", (e) => {
    plrChoice = e.target.innerHTML;
    plrChoiceDisplay.innerHTML = plrChoice;
    generateCpuChoice();
    getResult();
  })
);

function generateCpuChoice() {
  const rndNumber = Math.floor(Math.random() * 3) + 1;

  if (rndNumber === 1) {
    cpuChoice = "Rock";
  }

  if (rndNumber === 2) {
    cpuChoice = "Paper";
  }

  if (rndNumber === 3) {
    cpuChoice = "Scissors";
  }

  cpuChoiceDisplay.innerHTML = cpuChoice;
}

function getResult() {
  if (cpuChoice === plrChoice) {
    gameResult = "Draw!";
  }

  if (
    (cpuChoice === "Rock" && plrChoice === "Scissors") ||
    (cpuChoice === "Paper" && plrChoice === "Rock") ||
    (cpuChoice === "Scissors" && plrChoice === "Paper")
  ) {
    gameResult = "You lose!";
  }

  if (
    (cpuChoice === "Scissors" && plrChoice === "Rock") ||
    (cpuChoice === "Rock" && plrChoice === "Paper") ||
    (cpuChoice === "Paper" && plrChoice === "Scissors")
  ) {
    gameResult = "You win!!!";
  }

  gameResultDisplay.innerHTML = gameResult;
}
