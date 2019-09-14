
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const toCelsius =  () => {

}

const toFahrenheit =  () => {

}

// Get a reference to the button element in the DOM
const convertButton = document.getElementById('convertBtn');
const clearButton = document.getElementById('clearBtn');

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log("convert event", e);
}

const clearFormAndOutput = (e) => {
    console.log("clear event", e);
};

// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearFormAndOutput);