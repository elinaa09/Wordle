
const GAME_PAGE = "wordle.html";
const startBtn = document.getElementById("startBtn");


function startGame() {
  window.location.href = GAME_PAGE;
}

startBtn.addEventListener("click", startGame);
 
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startGame();
  }
});