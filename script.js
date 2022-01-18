var startGame = document.getElementById("startGame");
var restartGame = document.getElementById("restartGame");
var inputField = document.getElementById("inputField");
var gameBoard = document.getElementById("gameBoard");
var luckyNumber;
restartGame.disabled = true;

// chacks number of buttons to be right and generates those buttons in the gameBoard element
startGame.addEventListener("click", function () {
  let inputFieldNumber = parseInt(inputField.value);
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
    button.className = "btn btn-success";
    button.innerHTML = "It was me";
  } else {
    button.className = "btn btn-danger";
    button.innerHTML = "It wasn't me";
  }
}
