const num1 = document.getElementById('num1');
console.log(num1);
const input = document.getElementById('num-input');

const backspaceButton = document.getElementById("backspace-button");
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }

};


enterNumber = (n) => {
    if (input.value === "0") {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

const numButtons = document.getElementsByClassName('num-button');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}
const dotButton = document.getElementById('dot-button');
dotButton.onclick = () => {
    const n = input.value.length;
    for (var i = 0; i < n; i++) {
        if (input.value [i] === '.') {
            return;
        }
    }
    input.value += '.'

};
const plusButton = document.getElementById('plus-button');
let num = null;
let op = null;
if (num = null) {

    op = '+';
    console.log('+');



}



const minusButton = document.getElementById('minus-button');
minusButton.onclick = () => {
    const n = input.value.length;
    for (var i = 0; i < n; i++) {
        if (input.value[i] === '-') {
            return;
        }
    }
    input.value += '-'
};
const divisionButton = document.getElementById('division-button');
divisionButton.onclick = () => {
    const n = input.value.length;
    for (var i = 0; i < n; i++) {
        if (input.value[i] === '/') {
            return;
        }
    }
    input.value += '/'
};
const multiplicationButton = document.getElementById('multiplication-button');
multiplicationButton.onclick = () => {
    const n = input.value.length;
    for (var i = 0; i < n; i++) {
        if (input.value [i] === '*') {
            return;
        }
    }
    input.value += '*'
};
const equallyButton = document.getElementById('equally-button');
equallyButton.onclick = () => {
    const n = input.value.length;
    for (var i = 0; i < n; i++) {
        if (input.value [i] === '=') {
            return;
        }
    }
    input.value += '='
};


