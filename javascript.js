const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnValue = btn.textContent;

        const displayValue = display.value;

        if (displayValue === "0") {
            display.value = btnValue;
        } else {
            display.value += btnValue;
        }
    });
});

var operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const divBtn = document.getElementById("divide");
const mulBtn = document.getElementById("multiply");

const opBtns = document.querySelectorAll(".opBtn");

opBtns.forEach(opBtn => {
    opBtn.addEventListener("click", () => {
        var a = display.value;
        display.value = "0";
    });
});



const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    display.value = "0";
});