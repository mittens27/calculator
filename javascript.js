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

const addBtn = document.getElementById("#add");
const subBtn = document.getElementById("#subtract");
const divBtn = document.getElementById("#divide");
const mulBtn = document.getElementById("#multiply");

const opBtns = document.querySelector(".operators");

opBtns.addEventListener("click", function(event) {

    const clickedBtn = event.target;

    if (clickedBtn.tagName === "BUTTON") {
        console.log("you clicked an op button");
        aStr = display.value;
        display.value = "0";

        switch (clickedBtn.id) {
            case "add":
                operator = "add";
                break;
            case "subtract":
                operator = "subtract";
                break;
            case "divide":
                operator = "divide";
                break;
            case "multiply":
                operator = "multiply";
                break;
        }
    }
});

const eqBtn = document.querySelector("#equals");

eqBtn.addEventListener("click", () => {

    var bStr = display.value;
    a = parseInt(aStr, 10);
    b = parseInt(bStr, 10);
    if (operator === "add") {
        var results = operators.add(a, b);
        display.value = results;
    } else if (operator === "subtract") {
        var results = operators.subtract(a, b);
            display.value = results;
    } else if (operator === "divide") {
        var results = operators.divide(a, b);
        display.value = results;
    } else if (operator === "multiply") {
        var results = operators.multiply(a, b);
        display.value = results;
    }
});

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    display.value = "0";
});