//get the modal
const modal = document.getElementById("info-modal");
//endgame info in modal
const endgame = document.querySelector(".endgame");
//endgame info in modal, shows who won
const endgameText = document.querySelector(".endgame .text");
//selection info in modal, play X or O
const symbolSelect = document.querySelector(".select-symbol");
// replay button
const replayButton = document.getElementById("replay-button");
//cells
const cells = document.querySelectorAll(".cell");
//get the <span> element that closes the modal
// TODO get rid of extra span
const span = document.getElementsByClassName("close")[0];

let originalBoard; //original board, array that keeps track of what is in the square
let humanPlayer = "O";
let aiPlayer = "X";
//combos that mean that the game is won
const winCombos =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6]
];

startGame();

//on load
window.onload = function() {
  //on load, show modal
  modal.style.display = "block"
  //show symbol select in the modal
  symbolSelect.style.display = "block";
}

//when the user clicks on replay button, show symbol select and (re)start game
replayButton.onclick = function() {
    modal.style.display = "block";
    symbolSelect.style.display = "block";
    //run the function that starts the game
    startGame();
}

// when the user clicks on <span>, close the modal
span.onclick = function() {
    modal.style.display = "none";
    symbolSelect.style.display = "none";
}

//user can select the symbol
function selectSym(sym){
  humanPlayer = sym;
  aiPlayer = sym === "O" ? "X" : "O";
  originalBoard = Array.from(Array(9).keys());
  //loops through and read the click action on each cell
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", turnClick, false);
  }
  //if the human player chooses "O", the ai is "X" and goes first
  if (aiPlayer === "X") {
    turn(bestSpot(), aiPlayer);
  }
  //hide the modal and selection options after the symbol is selected
  modal.style.display = "none";
  symbolSelect.style.display = "none";
}

//start game
function startGame() {
  //hide the text that shows who won the game
  endgame.style.display = "none";
  //winner declaration text is currently empty
  endgameText.innerText = "";
  //show modal to select symbol
  modal.style.display = "block";
  symbolSelect.style.display = "block";
  //create array and give it a number
  //console.log(originalBoard);
  //To DO: replaces this for loop?
  //loop through the cells and remove the colours to replay
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
  }
}

function turnClick(square) {
  //prevent clicking on spots already clicked
  if (typeof originalBoard[square.target.id] === "number") {
    //call turn function, pass in humanPlayer
    turn(square.target.id, humanPlayer);
    //console.log(square.target.id);
    //before the ai plays, check if it is a tie
    if (!checkWin(originalBoard, humanPlayer) && !checkTie())
      turn(bestSpot(), aiPlayer);
  }
}

function turn(squareId, player) {
  originalBoard[squareId] = player;
  document.getElementById(squareId).innerHTML = player;
  //check if player has on
  //if won has been won, call gameOver
  let gameWon = checkWin(originalBoard, player);
  //pass into gameOver
  //if gameWon, then gameOver
  if (gameWon) gameOver(gameWon);
  checkTie();
}

function checkWin(board, player) {
  //pass in board because will be passing other versions of the board later one
  //accumulator, initialize
  //check the places on the board that have been played in
  //reduce will go through the board array and do something
  // e - element, i - index; take accumulator array and add the index of that array
  //ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  //check if game has been won
  for (let [index, win] of winCombos.entries()) {
    //for every element of winCombos, check if element is greater then -1
    //has the player played in all these spots?
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon){
  //highlight winning combo, disable clicking
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor = gameWon.player === humanPlayer ? "blue" : "red";
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWinner(gameWon.player === humanPlayer ? "You win!" : "You lose");
}

function declareWinner(who) {
  //show modal stating who won + option to replay
  modal.style.display = "block"
  endgame.style.display = "block";
  endgameText.innerText = who;
}
function emptySquares() {
  //if squares are numbers, they are empty (vs X or O)
  return originalBoard.filter((elm, i) => i === elm);
}

function bestSpot() {
  //use .index to tell computer what space to play in
  return minimax(originalBoard, aiPlayer).index;
  //return emptySquares()[0];
}

function checkTie() {
  //if all squares are filled and no winner, it is a tie
  if (emptySquares().length === 0){
    for (cell of cells) {
      cell.style.backgroundColor = "green";
      cell.removeEventListener("click",turnClick, false);
    }
    declareWinner("Tie game");
    return true;
  }
  return false;
}

function minimax(newBoard, player) {
  let availableSpots = emptySquares(newBoard);
  if (checkWin(newBoard, humanPlayer)) {
    return {score: -10};
  } else if (checkWin(newBoard, aiPlayer)) {
    return {score: 10};
  } else if (availableSpots.length === 0) {
    return {score: 0};
  }

  let moves = [];
  for (let i = 0; i < availableSpots.length; i ++) {
    let move = {};
    move.index = newBoard[availableSpots[i]];
    newBoard[availableSpots[i]] = player;
    if (player === aiPlayer) {
      move.score = minimax(newBoard, humanPlayer).score;
    } else {
       move.score =  minimax(newBoard, aiPlayer).score;
    }
    newBoard[availableSpots[i]] = move.index;
    if ((player === aiPlayer && move.score === 10) || (player === humanPlayer && move.score === -10)) {
      return move;
    } else {
      moves.push(move);
    }
  }
  let bestMove, bestScore;
  if (player === aiPlayer) {
    bestScore = -1000;
    for(let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
      bestScore = 1000;
      for(let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}


////////////////////PARTICLES ////////////////////////////
