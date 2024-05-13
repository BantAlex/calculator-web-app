//Dom
let display = document.querySelector('.display');
let buttons = document.querySelector('.calc-buttons');
let addButton = document.createElement('button');
let subtractButton = document.createElement('button');
let divideButton = document.createElement('button');
let multiplyButton = document.createElement('button');
let equalsButton = document.createElement('button');
let clearButton = document.createElement('button');

// let allOperators = [addButton,subtractButton,divideButton,multiplyButton,equalsButton,clearButton];
// allOperators.forEach(button =>{
//     button.classList.add(".calc-buttons");
//     buttons.appendChild(button);
// }); Add after number button


//Addition
function add(n1,n2){
    return n1 + n2;
}
//Subtraction
function subtract(n1,n2){
    return n1 - n2;
}
//Multiply
function multiply(n1,n2){
    return n1 * n2;
}
//Division
function divide(n1,n2){
    if (n2 === 0){
        return 'ERROR: Division by 0 is not allowed by math gods'; //Remember to reduce text size to fill display!
    } else {
        return n1 / n2;
    }
}
//Operation 
function operator(n1,op,n2){
    return op(n1,n2);
}
