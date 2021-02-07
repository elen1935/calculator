window.addEventListener('DOMContentLoaded', setUp);

// function writing on field
// document.querySelector("#firstnumber").value = result;

function setUp() {
    console.log("set up");
    document.querySelector("#calculate").addEventListener("click", clickCalculate);
    document.querySelector("#clear").addEventListener("click", clickClear);
    firstNumber(); //don't know if these would go here or in the clickCalculate function
    secondNumber();
    // add event listener if click clear button -> clickClear()
}

function firstNumber() {
    console.log("read first number");
    //const firstNumber = document.querySelector("#firstnumber").value;
    var x = document.querySelector("#firstnumber").value;
    document.querySelector("#firstnumber").innerHTML = x; //not sure if i need this line, not sure if it does anything
    /*
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
    */
    secondNumber(); //?
}

function secondNumber() {
    console.log("read second number");
    var y = document.querySelector("#secondnumber").value;
    document.querySelector("#secondnumber").innerHTML = y; //not sure if i need this
    clickCalculate();
}

function clickCalculate() {
    console.log("click calculate");
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
    //not.value but.checked; //boolean

    readDecimalsNumber()
    //if rounding -> read number of decimals -> round result -> showResult()
    //else -> showResult()
}

function readDecimalsNumber() {
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
    scrollListBottom();
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

