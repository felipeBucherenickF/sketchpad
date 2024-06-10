let squares = 50;

const numberOfSquares = document.getElementById("number-of-squares");
const setNumberOfSquares = document.getElementById("set-number-of-squares");

setNumberOfSquares.addEventListener("click", () => {
  squares = numberOfSquares.value;
  createBoard(squares);
});

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
};
