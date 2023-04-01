const textInput_1 = document.querySelector('#text-input_1');
const textInput_2 = document.querySelector('#text-input_2');
const resultBox_1 = document.querySelector('#result-box_1');
const resultBox_2 = document.querySelector('#result-box_2');
const limitRedLine = document.querySelector('#limit-line');
const limitInput = document.querySelector('#limit-input');
// let limitSlider = document.querySelector('#limit-slider');

textInput_1.addEventListener("input", updateText_1);
textInput_2.addEventListener("input", updateText_2);
limitInput.addEventListener('input', updateLimitLine);
// document.querySelector('#size-input').addEventListener("input", updateFont);
// document. querySelector('#font-select').addEventListener("change", updateFont);


function updateText_1() {
    const text_1 = document.querySelector('#text-input_1').value;
    resultBox_1.innerText = text_1;
    unhideLine ();
    setTimeout(lineHeight, 10);
}

function updateText_2() {
    const text_2 = document.querySelector('#text-input_2').value;
    resultBox_2.innerText = text_2;
}

function unhideLine () {
    if (resultBox_1.innerText) {
        limitRedLine.style.display = 'inline-block';
    } else {
        limitRedLine.style.display = 'none';
    }
}

function lineHeight() {
    const resultBoxHeight = resultBox_1.clientHeight;
    limitRedLine.style.height = resultBoxHeight + "px";
}

function updateLimitLine () {
    const limitValue = limitInput.value;
    const resultBoxWidth = resultBox_1.offsetWidth;
    const limitLineWidth = limitRedLine.offsetWidth;
    const limitPosition = (limitValue / 100) * resultBoxWidth;
    const maxLimitPosition = resultBoxWidth - limitLineWidth;

    if (limitPosition > maxLimitPosition) {
        limitRedLine.style.width = maxLimitPosition + "px";
    } else {
        limitRedLine.style.width = limitPosition + "px";
    }
}

// function updateFont() {
//     const text = document.querySelector('#font-select').value;
//     const size = document.querySelector('#size-input').value + "px";
//     resultBox.style.fontFamily = font;
//     resultBox.style.fontSize = size;
// }



// function updateLimitLine () {
//     const sliderValue = limitSlider.value;
//     const limitLine = limitRedLine;
//     limitLine.style.left =sliderValue + '%';
// }