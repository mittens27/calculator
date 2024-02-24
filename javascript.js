var operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

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

const opBtns = document.querySelectorAll(".opBtn");


const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    display.value = "0";
});