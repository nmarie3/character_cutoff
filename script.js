const resultBox =document.querySelector('#result-box');
const limitLine =document.querySelector('#limit-line')

document.querySelector('#text-input').addEventListener("input", updateText);
document.querySelector('#size-input').addEventListener("input", updateFont);
document. querySelector('#font-select').addEventListener("change", updateFont);


function updateText() {
    const text =document.querySelector('#text-input').value;
    resultBox.innerText = text;
}

function updateFont() {
    const text = document.querySelector('#font-select').value;
    const size = document.querySelector('#size-input').value + "px";
    resultBox.style.fontFamily = font;
    resultBox.style.fontSize = size;
}
