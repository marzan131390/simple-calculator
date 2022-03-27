let displayResult = document.getElementById("result-field");
function calculation(number) {
    let allNumber = displayResult .value + number;
    displayResult.value = allNumber;
};

function finalResult() {
    let finalCalculation = eval(displayResult.value);
    displayResult.value = finalCalculation;
}

function clearAll() {
    displayResult.value = " ";
    
};

function dltSingleNum() {
    newResult = displayResult.value;
    let result = newResult.slice(0,-1);
    displayResult.value = result;
}