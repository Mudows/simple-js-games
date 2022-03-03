const cardArray = [
  {
    name: "Fries",
    img: "img/fries.png",
  },

  {
    name: "Cheeseburger",
    img: "img/cheeseburger.png",
  },

  {
    name: "Hotdog",
    img: "img/hotdog.png",
  },

  {
    name: "Ice Cream",
    img: "img/ice-cream.png",
  },

  {
    name: "Milkshake",
    img: "img/milkshake.png",
  },

  {
    name: "Pizza",
    img: "img/pizza.png",
  },

  {
    name: "Fries",
    img: "img/fries.png",
  },

  {
    name: "Cheeseburger",
    img: "img/cheeseburger.png",
  },

  {
    name: "Hotdog",
    img: "img/hotdog.png",
  },

  {
    name: "Ice Cream",
    img: "img/ice-cream.png",
  },

  {
    name: "Milkshake",
    img: "img/milkshake.png",
  },

  {
    name: "Pizza",
    img: "img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const cardsChosen = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  console.log(cardsChosen);
  this.setAttribute('src', cardArray[cardId].img)
}
