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
const plusButton = document.getElementById("plus-button");
plusButton.onclick = () => {

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
    button.onclick = () => {enterNumber(num)}
}


