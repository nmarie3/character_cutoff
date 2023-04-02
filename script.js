const textInput_1 = document.querySelector('#text-input_1');
const textInput_2 = document.querySelector('#text-input_2');
const resultBox_1 = document.querySelector('#result-box_1');
const resultBox_2 = document.querySelector('#result-box_2');
const limitRedLine = document.querySelector('#limit-line');
const limitInput = document.querySelector('#limit-input');
const sizeInput = document.querySelector('#size-input')
const fontSelect = document.querySelector('#font-select')
const thirdSection = document.querySelector('#third');


textInput_1.addEventListener("input", updateText_1);
textInput_2.addEventListener("input", updateText_2);
limitInput.addEventListener('input', updateLimitLine);
sizeInput.addEventListener("input", updateFont);
fontSelect.addEventListener("change", updateFont);


function updateFont() {
const font = fontSelect.value;
const size = sizeInput.value + "px";
    thirdSection.style.fontFamily = font;
    thirdSection.style.fontSize = size;
    lineHeight();
}

function updateText_1() {
    const text_1 = textInput_1.value;
    resultBox_1.innerText = text_1;
    unhideLine ();
    updateFont();
    lineHeight();
}

function updateText_2() {
    const text_2 = textInput_2.value;
    resultBox_2.innerText = text_2;
    
    if (resultBox_2.innerText) {
        resultBox_2.style.display = 'inline-block';
    } else {
        resultBox_2.style.display = 'none';
    }
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
    const maxLimitPosition = 600;

    if (limitValue > maxLimitPosition) {
        limitRedLine.style.left = maxLimitPosition + 30 + "px";
    } else {
        limitRedLine.style.left = limitValue + 30 + "px";
    }
}

