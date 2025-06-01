const startBtn = document.querySelector(".start-btn");
const reStartBtn = document.querySelector(".restart-btn");
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
    enableBtn();
});

allCtrBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
        symbol["player1"] = e.target.textContent.trim().toLowerCase();
        symbol["player2"] = choseRPS();
        if (symbol["player1"] !== "" && symbol["player2"] !== "") checkWinner();
    });
});

function enableBtn(btnName) {
    if (btnName === "restart") {
        alert("Game Started");
        reStartBtn.classList.remove("hidden");
        startBtn.classList.add("hidden");
        allCtrBtns.forEach((item) => {
            item.disabled = false;
        });
    } else {
        reStartBtn.classList.add("hidden");
        startBtn.classList.remove("hidden");
        allCtrBtns.forEach((item) => {
            item.disabled = true;
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
        console.log("Tie");
        return;
    } else if (
        symbol["player1"] === "rock" &&
        symbol["player2"] === "scissors"
    ) {
        score["player1"]++;
        console.log("Player 1 Wons: rock beats scissors");
        return;
    } else if (symbol["player1"] === "paper" && symbol["player2"] === "rock") {
        score["player1"]++;
        console.log("Player 1 Wons: paper beats rock");
        return;
    } else if (
        symbol["player1"] === "scissors" &&
        symbol["player2"] === "paper"
    ) {
        score["player1"]++;
        console.log("Player 1 Wons: scissors beats paper");
        return;
    } else {
        score["player2"]++;
        console.log(
            `Player 2 won: ${symbol["player2"]} beats ${symbol["player1"]}`
        );
        return;
    }
}
