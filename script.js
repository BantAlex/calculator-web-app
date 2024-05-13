//DOM
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
//Individual Button Selectors
let num0 = document.querySelector('.num0');

//All Buttons
function generateNumbers(){
    //Row 0
        number0 = document.createElement('button');
        number0.classList.add('numbers','num0');
        number0.textContent = 0;
        row0.appendChild(number0);

        number0.addEventListener('click', () =>{
            values.textContent = '0'
        })

        equals = document.createElement('button');
        equals.classList.add('numbers','equals');
        equals.textContent = '=';
        row0.appendChild(equals);

        clear = document.createElement('button');
        clear.classList.add('numbers','clear');
        clear.textContent = 'C/A';
        row0.appendChild(clear);

        clear.addEventListener('click', () =>{
            values.textContent = ''
        })
        //Row 1
    for (let i = 1; i<=3; i++){
        let currentNumber = 'num' + i;
        let currentNumberDOM = document.querySelector('.num' + i);
        window[currentNumber] = currentNumberDOM;
        numRow1 = document.createElement('button');
        numRow1.classList.add('numbers', 'num' + i);
        numRow1.textContent = i;
        row1.appendChild(numRow1);

        numRow1.addEventListener('click', (function(index) {
            return function() {
                values.textContent = index;
            }; 
        })(i)); //That's so cool that you can do that.
    }
        minus = document.createElement('button');
        minus.classList.add('numbers','minus');
        minus.textContent = '-';
        row1.appendChild(minus);
    //Row 2
    for (let i = 4; i<=6; i++){
        let currentNumber = 'num' + i;
        let currentNumberDOM = document.querySelector('.num' + i);
        window[currentNumber] = currentNumberDOM;
        numRow2 = document.createElement('button');
        numRow2.classList.add('numbers', 'num' + i);
        numRow2.textContent = i;
        row2.appendChild(numRow2);

        numRow2.addEventListener('click', (function(index) {
            return function() {
                values.textContent = index;
            }; 
        })(i));
    }
        multiplyButton = document.createElement('button');
        multiplyButton.classList.add('numbers', 'multiply');
        multiplyButton.textContent = 'X';
        row2.appendChild(multiplyButton);
    //Row 3
    for (let i = 7; i<=9; i++){
        let currentNumber = 'num' + i;
        let currentNumberDOM = document.querySelector('.num' + i);
        window[currentNumber] = currentNumberDOM;
        numRow3 = document.createElement('button');
        numRow3.classList.add('numbers', 'num' + i);
        numRow3.textContent = i;
        row3.appendChild(numRow3);

        numRow3.addEventListener('click', (function(index) {
            return function() {
                values.textContent = index;
            }; 
        })(i));
    }
        division = document.createElement('button');
        division.classList.add('numbers', 'division');
        division.textContent = '÷';
        row3.appendChild(division);
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
};