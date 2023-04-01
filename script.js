const textInput_1 = document.querySelector('#text-input_1');
const textInput_2 = document.querySelector('#text-input_2');
const resultBox_1 = document.querySelector('#result-box_1');
const resultBox_2 = document.querySelector('#result-box_2');
const limitRedLine = document.querySelector('#limit-line');
let limitSlider = document.querySelector('#limit-slider');

textInput_1.addEventListener("input", updateText_1);
textInput_2.addEventListener("input", updateText_2);
limitSlider.addEventListener('input', updateLimitLine);
// document.querySelector('#size-input').addEventListener("input", updateFont);
// document. querySelector('#font-select').addEventListener("change", updateFont);


function updateText_1() {
    const text_1 = document.querySelector('#text-input_1').value;
    resultBox_1.innerHTML = `<div id="limit-line"></div><p>${text_1}</p>`;
}

function updateText_2() {
    const text_2 = document.querySelector('#text-input_2').value;
    resultBox_2.innerHTML = text_2;
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