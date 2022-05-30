const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1"),
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2"),
}


const resetButton = document.querySelector("#reset");


const winner = document.querySelector("#winnerScore");




let winnerScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
    }
    if (player.score === winnerScore) {
        isGameOver = true
        player.display.style.color = "green";
        opponent.display.style.color = "red";
    }
    player.display.textContent = player.score
}

p1.button.addEventListener("click", function () {
    updateScore(p1, p2)
})

p2.button.addEventListener("click", function () {
    updateScore(p2, p1)
})

resetButton.addEventListener("click", reset)

winner.addEventListener("change", function () {
    winnerScore = parseInt(this.value)
    reset()
})

function reset() {
    for (p of [p1, p2]) {
        isGameOver = false
        p.score = 0
        p.display.textContent = 0
        p.display.style.color = "black"
    }
}
