// DOM Variables
// Targets list to populate scores
var highScores = document.getElementById("scores");

var backBtn = document.getElementById("go-back");
var clearBoard = document.getElementById ("clear-scores")

// Function Definition
function showBoard() {
    var storedScoreBoard = JSON.parse(localStorage.getItem("userScores"));

    if(storedScoreBoard !== null){
        storedScoreBoard.sort(function (a, b) {
            return b.score - a.score;
          });

// Each score in the array creates a new list item with name and score
          for (var i = 0; i < storedScoreBoard.length; i++) {
            var scoreList = document.createElement("li");
            scoreList.setAttribute(
              "class",
              "list-group-item list-group-item-primary px-2 py-1 font-weight-bold purple "
            );
            scoreList.textContent =
              i +
              1 +
              "." +
              " " +
              storedScoreBoard[i].name +
              " - " +
              storedScoreBoard[i].score;
            highScores.appendChild(scoreList);
          }
        }
    
}
// Function Call
// Upon loading the stored scoreboard will populate
window.onload = showBoard();

backBtn.addEventListener("click", function (event){
    event.preventDefault();
  window.location.href = "index.html";
});
clearBoard.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    highScores.innerHTML = "";
    showBoard();
  });