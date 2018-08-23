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
let num = null;
let op = null;
const plusButton = document.getElementById('plus-button');
plusButton.onclick = () => {
    if (num == null) {
        op = '+';
        console.log('+');
        return;

    }
};



