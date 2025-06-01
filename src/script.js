const startBtn = document.querySelector(".start-btn");
const reStartBtn = document.querySelector(".restart-btn");
const stopBtn = document.querySelector(".stop-btn");
const allCtrBtns = document.querySelectorAll(".ctr-btn");
const score = {
    player1: 0,
    player2: 0,
};

const symbol = {
    player1: "",
    player2: "",
};

startBtn.addEventListener("click", () => {
    enableBtn("restart");
});

reStartBtn.addEventListener("click", () => {
    alert("Game Re-Started");
    resetScore();
});

stopBtn.addEventListener("click", () => {
    enableBtn("stop");
});

allCtrBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
        symbol["player1"] = e.target.textContent.trim().toLowerCase();
        symbol["player2"] = choseRPS();
        if (symbol["player1"] !== "" && symbol["player2"] !== "") checkWinner();
        updateScore();
        displayResult();
    });
});

function enableBtn(btnName) {
    if (btnName === "restart") {
        resetSymbols();
        alert("Game Started");
        resetScore();
        reStartBtn.classList.remove("hidden");
        stopBtn.classList.remove("hidden");
        startBtn.classList.add("hidden");
        allCtrBtns.forEach((item) => {
            item.disabled = false;
            item.classList.remove("cursor-not-allowed");
            item.classList.add("cursor-pointer");
        });
    } else {
        resetSymbols();
        alert("Game Stoped");
        resetScore();
        reStartBtn.classList.add("hidden");
        stopBtn.classList.add("hidden");
        startBtn.classList.remove("hidden");
        allCtrBtns.forEach((item) => {
            item.disabled = true;
            item.classList.add("cursor-not-allowed");
            item.classList.remove("cursor-pointer");
        });
    }
}

function choseRPS() {
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    return options[i];
}

function checkWinner() {
    if (symbol["player1"] === symbol["player2"]) {
        return;
    } else if (
        (symbol["player1"] === "rock" && symbol["player2"] === "scissors") ||
        (symbol["player1"] === "paper" && symbol["player2"] === "rock") ||
        (symbol["player1"] === "scissors" && symbol["player2"] === "paper")
    ) {
        score["player1"]++;
        return;
    } else {
        score["player2"]++;
        return;
    }
}

function updateScore() {
    document.querySelector(".p1-score").textContent = score["player1"];
    document.querySelector(".p2-score").textContent = score["player2"];
}

function resetScore() {
    score["player1"] = 0;
    score["player2"] = 0;
    updateScore();
}

function resetSymbols() {
    symbol["player1"] = "";
    symbol["player2"] = "";
    displayResult();
}

function displayResult() {
    document.querySelector(".p1-output").textContent =
        symbol["player1"].toUpperCase();
    document.querySelector(".p2-output").textContent =
        symbol["player2"].toUpperCase();
}
