// Iteration 8: Making scoreboard functional

var urlParams = new URLSearchParams(window.location.search)

var score = urlParams.get("score")

var scoreboard = document.querySelector("#score-board")

var playAgain = document.querySelector("#play-again-button")

scoreboard.innerHTML = score

playAgain.onclick = () => {
    location.href = "./game.html"
}