console.log('Hello World');

const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [6, 4, 2], 
[0, 4, 8]];

function checkWinner {
  
}

function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

function playTurn(event) {
  const square = event.target;
  console.log('Event Square:', square);

  if (square.textContent === "") {
    square.textContent = currentPlayer.textContent;
    switchPlayer();
  }

  console.log(switchPlayer)
  console.log(currentPlayer)
}

for (const square of squares) {
  square.addEventListener('click', playTurn)
}