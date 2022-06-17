
let displayValue = 0;

let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

function operate(a, op, b) {
    
    if(op === '+') return add(a,b);
    if(op === '-') return subtract(a,b);
    if(op === '*') return multiply(a,b);
    if(op === '/') return divide(a,b);
    
}

function updateDisplay(value) {
    document.getElementsByClassName("calc-display")[0].innerHTML = value;
}
updateDisplay("hello");