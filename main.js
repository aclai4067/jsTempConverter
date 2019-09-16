
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const toCelsius =  () => {
    const inputTempF = (document.getElementById('inputTemp').value - 32) * 5 / 9;
    const outputTempC= Math.round(inputTempF);
    printToDom('tempOuput', `<h3>${outputTempC}&#176 Celsius</h3>`);
}

const toFahrenheit =  () => {
    const inputTempC = document.getElementById('inputTemp').value * 9 / 5 + 32;
    const outputTempF= Math.round(inputTempC);
    printToDom('tempOuput', `<h3>${outputTempF}&#176 Fahrenheit</h3>`);
}

// Get a reference to the button element in the DOM
const convertButton = document.getElementById('convertBtn');
const clearButton = document.getElementById('clearBtn');

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = () => {
    if (document.getElementById('gridRadios2').checked) {
        toCelsius();
    } else if (document.getElementById('gridRadios1').checked) {
        toFahrenheit();
    }
}

const clearFormAndOutput = (e) => {
    console.log("clear event", e);
};

// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", () => {
    determineConverter();
    }
);
clearButton.addEventListener("click", clearFormAndOutput);