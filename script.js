const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let firstValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value) {
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstValue = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (firstValue !== '' && operator !== '' && currentInput !== '') {
        const secondValue = currentInput;
        let result;

        if (operator === '+') {
            result = parseFloat(firstValue) + parseFloat(secondValue);
        } else if (operator === '-') {
            result = parseFloat(firstValue) - parseFloat(secondValue);
        } else if (operator === '*') {
            result = parseFloat(firstValue) * parseFloat(secondValue);
        } else if (operator === '/') {
            result = parseFloat(firstValue) / parseFloat(secondValue);
        }

        display.value = result;
        currentInput = result.toString();
        firstValue = '';
        operator = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    firstValue = '';
    operator = '';
    display.value = '';
});
