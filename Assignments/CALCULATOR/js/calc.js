
//Store Result in Global Variable
const result = document.getElementById("answer");


//Write a demo function 
function resultAssign () {
    num = 3 + 5 + 50 + 500 + 87 + 2;
    result.innerHTML = num;
console.log("Variable num represents the number: " + num);
} 
//Call the function
resultAssign()

//function to Add Two and Two
//Declare
function addTwoPlusTwo() {
    result.innerHTML = 2 + 2;
}

//Multiplication
function multiply(n1, n2) {
    let multiplication = n1 * n2;
    result.innerHTML = multiplication;
}

//Division
function divide(n1, n2) {
    let division = n1 / n2;
    result.innerHTML = division;

}

//Subtraction
function subtract(n1, n2) {
    let subtraction = n1 - n2;
    result.innerHTML = subtraction;
}




addTwoPlusTwo()

