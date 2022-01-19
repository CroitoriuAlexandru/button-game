let startGame = document.getElementById("startGame");
let restartGame = document.getElementById("restartGame");
let inputField = document.getElementById("inputField");
let gameBoard = document.getElementById("gameBoard");
let luckyNumber;
let inputFieldNumber;
restartGame.disabled = true;

// chacks number of buttons to be right and generates those buttons in the gameBoard element
startGame.addEventListener("click", function () {
  inputFieldNumber = parseInt(inputField.value);
  if (inputFieldNumber >= 2 && 100 >= inputFieldNumber) {
    luckyNumber = Math.floor(Math.random() * inputFieldNumber + 1);
    startGame.disabled = true;
    restartGame.disabled = false;
    for (let i = 1; i <= inputFieldNumber; ++i) {
      gameBoard.innerHTML +=
        `<button class="btn btn-warning m-1" id="` +
        i +
        `" onclick="check(this)">Guess</button>`;
    }
  } else {
    alert("You enterd the wrong number");
  }
});

// restarts the game
restartGame.addEventListener("click", function () {
  startGame.disabled = false;
  restartGame.disabled = true;
  gameBoard.innerHTML = "";
});

// on click function of the generated buttons
function check(button) {
  if (parseInt(button.id) == luckyNumber) {
    button.className = "btn btn-success m-1";
    button.innerHTML = "It was me";
    button.disabled = true;
    for (let i = 0; i < inputFieldNumber; ++i) {
      if (!gameBoard.children[i].disabled) {
        gameBoard.children[i].disabled = true;
      }
    }
    alert("You have won, now you can reset and try again");
  } else {
    button.className = "btn btn-danger m-1";
    button.innerHTML = "It wasn't me";
    button.disabled = true;
  }
}
