let bt = document.querySelectorAll(".bt");
let rstbtn = document.querySelector("#reset");
let turnO = true;
let newbtn = document.querySelector("#new");
let msgcont = document.querySelector("#msg-cont");
let msg = document.querySelector("#msg");

let winPtrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBtns = () => {
    for (let btns of bt) {
        btns.disabled = true; 
    }
};

const enableBtns = () => {
    for (let btn of bt) {
        btn.disabled = false;
        btn.innerText = "";
    }
};

const ResetBtns = () => {
    turnO = true;
    enableBtns();
    msgcont.classList.add("hide");
    msgcont.classList.remove("show");
};

const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations! The Winner is ${winner}`;
    msgcont.classList.add("show"); 
    msgcont.classList.remove("hide");
    disableBtns();
};

bt.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPtrn) {
        let pos1val = bt[pattern[0]].innerText;
        let pos2val = bt[pattern[1]].innerText;
        let pos3val = bt[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
        }
    }
};

rstbtn.addEventListener("click", ResetBtns);
newbtn.addEventListener("click", ResetBtns);
