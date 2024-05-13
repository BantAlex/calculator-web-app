//Dom
let display = document.querySelector('.display');
let buttons = document.querySelector('.calc-buttons');
let row0 = document.querySelector('.row0')
let row1 = document.querySelector('.row1')
let row2 = document.querySelector('.row2')
let row3 = document.querySelector('.row3')
let values = document.querySelector('.values');
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

//All Buttons
function generateNumbers(){
    //Row 0
    let number0 = document.createElement('button');
        number0.classList.add('numbers','num0');
        number0.textContent = 0;
        row0.appendChild(number0);
    let equals = document.createElement('button');
        equals.classList.add('numbers','equals');
        equals.textContent = '=';
        row0.appendChild(equals);
    let clear = document.createElement('button');
        clear.classList.add('numbers','clear');
        clear.textContent = 'C/A';
        row0.appendChild(clear);
        //Row 1
    for (let i = 1; i<=3; i++){
        let numRow1 = document.createElement('button');
        numRow1.classList.add('numbers', 'num' + i);
        numRow1.textContent = i;
        row1.appendChild(numRow1);

        numRow1.addEventListener('click', (function(index) {
            return function() {
                values.textContent = index;
            }; 
        })(i)); //That's so cool that you can do that.
    }
    let minus = document.createElement('button');
        minus.classList.add('numbers','minus');
        minus.textContent = '-';
        row1.appendChild(minus);
    //Row 2
    for (let i = 4; i<=6; i++){
        let numRow2 = document.createElement('button');
        numRow2.classList.add('numbers', 'num' + i);
        numRow2.textContent = i;
        row2.appendChild(numRow2);

        numRow2.addEventListener('click', (function(index) {
            return function() {
                values.textContent = index;
            }; 
        })(i));
    }
    let multiply = document.createElement('button');
        multiply.classList.add('numbers', 'multiply');
        multiply.textContent = 'X';
        row2.appendChild(multiply);
    //Row 3
    for (let i = 7; i<=9; i++){
        let numRow3 = document.createElement('button');
        numRow3.classList.add('numbers', 'num' + i);
        numRow3.textContent = i;
        row3.appendChild(numRow3);

        numRow3.addEventListener('click', (function(index) {
            return function() {
                values.textContent = index;
            }; 
        })(i));
    }
    let division = document.createElement('button');
        division.classList.add('numbers', 'division');
        division.textContent = '÷';
        row3.appendChild(division);

    //Inputs
    number0.addEventListener('click', () =>{
        values.textContent = '0'
    })
}

generateNumbers();
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
