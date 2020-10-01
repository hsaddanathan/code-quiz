var highScores = document.getElementById("scores");
var backBtn = document.getElementById("go-back");
var clearBoard = document.getElementById ("clear-scores")


function showBoard() {
    var storedScoreBoard = JSON.parse(localStorage.getItem("userScores"));

    if(storedScoreBoard !== null){
        storedScoreBoard.sort(function (a, b) {
            return b.score - a.score;
          });


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