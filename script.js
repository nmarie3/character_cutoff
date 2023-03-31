const textInput = document.querySelector('#text-input');
const resultBox = document.querySelector('#result-box');
const limitRedLine = document.querySelector('#limit-line');
let limitSlider = document.querySelector('#limit-slider');

textInput.addEventListener("input", updateText);
limitSlider.addEventListener('input', updateLimitLine);
// document.querySelector('#size-input').addEventListener("input", updateFont);
// document. querySelector('#font-select').addEventListener("change", updateFont);


function updateText() {
    const text = document.querySelector('#text-input').value;
    resultBox.innerText = text;
}

function updateFont() {
    const text = document.querySelector('#font-select').value;
    const size = document.querySelector('#size-input').value + "px";
    resultBox.style.fontFamily = font;
    resultBox.style.fontSize = size;
}

function updateLimitLine () {
    const sliderValue = limitSlider.value;
    const limitLine = limitRedLine;
    limitLine.style.left =sliderValue + '%';
}