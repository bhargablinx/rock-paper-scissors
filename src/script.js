const startBtn = document.querySelector(".start-btn");
const reStartBtn = document.querySelector(".restart-btn");
const allCtrBtns = document.querySelectorAll(".ctr-btn");
const score = {
    player1: 0,
    player2: 0,
};

startBtn.addEventListener("click", () => {
    enableBtn("restart");
});

reStartBtn.addEventListener("click", () => {
    enableBtn();
});

allCtrBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.textContent.trim().toLowerCase());
    });
});

function enableBtn(btnName) {
    if (btnName === "restart") {
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
