const whacSquares = document.querySelectorAll(".whac-square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#whac-timer");
const whacScore = document.querySelector("#whac-score");

let result = 0;

function randomSquare() {
  whacSquares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = whacSquares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
}

randomSquare();
