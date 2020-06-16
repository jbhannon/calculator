const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (op, a, b) => {
    if (op == divide && b == 0) {
        clear();
        document.querySelector("#display").textContent = "pls don't";
        broken = true;
        return;
    }
    return op(a, b);
}
const display = (str) => {
    if (str.toString().length > 10 && str.toString().includes(".")) str = str.toString().slice(0,str.toString().indexOf(".") + 4)
    document.querySelector("#display").textContent = str;
}
const clear = () => {
    operation = null;
    savedNum = 0;
    workingStr = "";
    display(workingStr);
}
const back = () => {
    if (workingStr) {
        workingStr = workingStr.slice(0, workingStr.length-1);
    }
    display(workingStr);
}
let broken = false;
let operation = null;
let savedNum = 0;
let workingStr = "";



document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", (e) => {
        let char = e.target.getAttribute("data-do");
        if (char == "." && workingStr.includes(".")) {
            return;
        }
        workingStr += char;
        display(workingStr);
    });
});

document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", (e) => {
        let operator = e.target.getAttribute("data-do");
        if (operation && operator == "equals") {
            workingStr = operate(operation, savedNum, +workingStr);
            if (broken){
                broken = false;
                workingStr = "";
                return;
            }
            operation = null;
            savedNum = +workingStr;
            workingStr = "";
            display(savedNum);
            return;
        }
        if(operation) {
            workingStr = operate(operation, savedNum, +workingStr);
            if (broken) {
                broken = false;
                workingStr ="";
                return;
            }
            savedNum = 0;
            operation = null;
            display(workingStr);
        }
        switch (operator) {
            case "add":
                operation = add;
                break;
            case "subtract":
                operation = subtract;
                break;
            case "multiply":
                operation = multiply;
                break;
            case "divide":
                operation = divide;
                break;
            default:
                return;
        }
        if (workingStr) {
            savedNum = +workingStr;
            workingStr = "";
            display(savedNum);
        }
    });
});

document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#back").addEventListener("click", back);