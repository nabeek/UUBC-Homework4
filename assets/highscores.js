// Define global variables

var clearScores = document.getElementById("clearScores");
var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


// Populate list items from local storage scores

highScoresList.innerHTML = 
    highScores.map(function(score) {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");


// Clear scores and refresh page

clearScores.addEventListener("click", function() {
    localStorage.clear();
    window.location.assign("./highscores.html");
});