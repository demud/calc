document.querySelector('.number').addEventListener('click', clickNumber);
document.querySelector('.operation').addEventListener('click', operation);
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');

function clickNumber() {
    display.value += 1
}

function operation() {
    display.value += '+'
}

function calc() {
    display.value = eval(display.value)
}