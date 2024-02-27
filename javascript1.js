const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");
const opBtns = document.querySelectorAll(".opBtn");

let currentInput = '0';
let prevInput = null;
let operator = null;
let result = null;
let waitForSecondOperand = false;

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

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

opBtns.forEach(opBtn => {
    opBtn.addEventListener("click", () => {
        currentInput = display.value;
        handleOperator(opBtn.textContent);
        display.value = currentInput;
    });
});

function handleOperator(o) {
    if (waitForSecondOperand) {
        equals();
    } else {
        prevInput = parseFloat(currentInput);
    }

    currentInput = '0';
    operator = o;
    waitForSecondOperand = true;
}

document.querySelector('#equals').addEventListener("click", () => {
    currentInput = display.value;
    equals();
});

function equals() {

    const b = parseFloat(currentInput);
    const a = parseFloat(prevInput);

    if (operator === "+") {
        result = operations.add(a, b);
    } else if (operator === "-") {
        result = operations.subtract(a, b);
    } else if (operator === "÷") {
        result = operations.divide(a, b);
    } else if (operator === "x") {
        result = operations.multiply(a, b);
    }

    display.value = result.toString();

    prevInput = result;
    operator = null;
    waitForSecondOperand = false;
}

function clear() {
    currentInput = '0';
    prevInput = null;
    operator = null;
    result = null;
    waitForSecondOperand = false;
}

document.querySelector('#clear').addEventListener("click", () => {
    clear();
    display.value = currentInput;
});
