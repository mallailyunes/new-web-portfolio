// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const xScoreText = document.querySelector('#x-score');
const oScoreText = document.querySelector('#o-score');
const drawScoreText = document.querySelector('#draw-score');
const messageText = document.querySelector('#message');
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let moves = 0;
let xWins = 0;
let oWins = 0;
let draws = 0;
let gameOver = false;

function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

function playTurn(event) {
  const square = event.target;

  if (square.textContent !== '' || gameOver) {
    return;
  }

  square.textContent = currentPlayer.textContent;

  moves = moves + 1;

  checkWinner();

  if (!gameOver) {
    switchPlayer();
  }
}

function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;

    if (first !== '' && first === second && first === third) {
      gameOver = true;
      if (messageText) {
        messageText.textContent = first + ' wins!';
      }

      if (first === 'X') {
        xWins = xWins + 1;
        xScoreText.textContent = 'X: ' + xWins;
      } else {
        oWins = oWins + 1;
        oScoreText.textContent = 'O: ' + oWins;
      }

      return;
    }
  }

  if (moves === 9) {
    gameOver = true;
    if (messageText) {
      messageText.textContent = "It's a draw!";
    }
    draws = draws + 1;
    drawScoreText.textContent = 'Draws: ' + draws;
  }
}

function resetGame() {
  for (const square of squares) {
    square.textContent = '';
  }

  moves = 0;
  gameOver = false;
  currentPlayer.textContent = 'X';

  if (messageText) {
    messageText.textContent = '';
  }
}

for (const square of squares) {
  square.addEventListener('click', playTurn);
}

if (resetButton) {
  resetButton.addEventListener('click', resetGame);
}