window.addEventListener('DOMContentLoaded', setUp);

// function writing on field
// document.querySelector("#firstnumber").value = result;

function setUp() {
    console.log("set up");
    clickCalculate();
    // add event listener if click clear button -> clickClear()
}

function clickCalculate() {
    console.log("click calculate");
    readFirstNumber();
}

function readFirstNumber() {
    console.log("read first number");
    const firstNumber = document.querySelector("#firstnumber").value;
    readSecondNumber();
}

function readSecondNumber() {
    console.log("read second number");
    readOperator();
}

function readOperator() {
    console.log("read operator");
    const operator = document.querySelector("#operator").value;
    //add
    //substract
    //multiply
    //divide
}

function add() {
    console.log("add");
    checkIfRoundingNeeded();
}

function substract() {
    console.log("substract");
    checkIfRoundingNeeded();
}

function multiply() {
    console.log("multiply");
    checkIfRoundingNeeded();
}

function divide() {
    console.log("divide");
    checkIfRoundingNeeded();
}

function checkIfRoundingNeeded() {
    console.log("check if rounding is needed");
    not.value but.checked; //boolean

    //if rounding -> read number of decimals -> round result -> showResult()
    //else -> showResult()
}

funcstion readDecimalsNumber() {
    console.log("read number of decimals");
    roundResult();
}

function roundResult() {
    console.log("round results to number of decimals");
    showResult();
}

function showResult() {
    console.log("show result");
    // append result to end of list - is it another function?
    scrollListBottom;
}

function scrollListBottom() {
    console.log("scroll list to the bottom");
    document.querySelector("#results").scrollTo(0,1000000);
}





function clickClear() {
    console.log("click clear");
    clearResultsList();
}

function clearResultsList() {
    console.log("clear results list");
}