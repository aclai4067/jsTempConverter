
const convertedTemp = document.getElementById('tempOutput');
const convertButton = document.getElementById('convertBtn');
const clearButton = document.getElementById('clearBtn');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const toCelsius =  () => {
    const inputTempF = (document.getElementById('inputTemp').value - 32) * 5 / 9;
    const outputTempC= Math.round(inputTempF);
    printToDom('tempOutput', `<h3>${outputTempC}&#176 Celsius</h3>`);
    if (outputTempC > 32) {
        convertedTemp.getElementsByTagName('h3')[0].style.color = '#CF062E';
    } else if (outputTempC < 0) {
        convertedTemp.getElementsByTagName('h3')[0].style.color = '#2B91CA';
    };  
}

const toFahrenheit =  () => {
    const inputTempC = document.getElementById('inputTemp').value * 9 / 5 + 32;
    const outputTempF= Math.round(inputTempC);
    printToDom('tempOutput', `<h3>${outputTempF}&#176 Fahrenheit</h3>`);
    if (outputTempF > 90) {
        convertedTemp.getElementsByTagName('h3')[0].style.color = '#CF062E';
    } else if (outputTempF < 32) {
        convertedTemp.getElementsByTagName('h3')[0].style.color = '#2B91CA';
    };
    
}

const determineConverter = () => {
    if (document.getElementById('gridRadios2').checked) {
        toCelsius();
    } else if (document.getElementById('gridRadios1').checked) {
        toFahrenheit();
    }
}

const clearFormAndOutput = () => {
    document.getElementById('inputTemp').value = '';
    printToDom('tempOutput', '');
    for (let i = 1; i < 3; i++){
        document.getElementById(`gridRadios${[i]}`).checked = false; 
    };
};

convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearFormAndOutput);