let squares = 50;
let isRandom = false;

const numberOfSquares = document.getElementById("number-of-squares");
const setNumberOfSquares = document.getElementById("set-number-of-squares");
const setRandomColor = document.getElementById("set-random-color");

setNumberOfSquares.addEventListener("click", () => {
  squares = numberOfSquares.value;
  createBoard(squares);
});

setRandomColor.addEventListener("click", () => {
  isRandom = true;
});

const randomColor = () => {
  let r = Math.ceil(Math.random() * (255 - 0) + 0);
  let g = Math.ceil(Math.random() * (255 - 0) + 0);
  let b = Math.ceil(Math.random() * (255 - 0) + 0);
  return `rgb(${r},${g},${b})`;
};

const createBoard = (squares) => {
  const board = document.querySelector(".board");
  board.innerHTML = "";

  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    board.appendChild(row);
    for (let j = 0; j < squares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }

  const hoverSquares = document.querySelectorAll(".square");
  hoverSquares.forEach((hoverSquare) => {
    hoverSquare.addEventListener("mouseover", () => {
      if (isRandom) {
        hoverSquare.style.backgroundColor = randomColor();
        hoverSquare.style.opacity = "1";
      } else {
        let opacity = parseFloat(hoverSquare.style.opacity || "0");
        if (opacity <= 1) {
          hoverSquare.style.opacity = (opacity + 0.1).toFixed(2);
        }
      }
    });
  });
};

createBoard(50);
