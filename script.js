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
//Variable Decloration
let firstInput;
let secondInput;
let operatorButton = false;
let isReadyForOperation = false;
let isEqualsClicked = false;
let result = 0;

//All Buttons
function clearState(){
    values.textContent = '';
    firstInput = 0; 
    secondInput = 0;
    operatorButton = false;
    result = 0;
    currentNumber = '';
}
function generateNumbers(){
    //Row 0
        number0 = document.createElement('button');
        number0.classList.add('numbers','num0');
        number0.textContent = 0;
        row0.appendChild(number0);

        equals = document.createElement('button');
        equals.classList.add('numbers','equals');
        equals.textContent = '=';
        row0.appendChild(equals);
        
        equals.addEventListener('click', ()=>{
            isEqualsClicked = true;
            operator(firstInput,operation,secondInput);
            values.textContent = result;
            firstInput = 0; 
            secondInput = 0;
            operatorButton = false;
        })
        clear = document.createElement('button');
        clear.classList.add('numbers','clear');
        clear.textContent = 'C/A';
        row0.appendChild(clear);

        clear.addEventListener('click', ()=>{
            clearState();
            values.textContent = '';
        });
        //Row 1
    for (let i = 1; i<=3; i++){
        numRow1 = document.createElement('button');
        numRow1.classList.add('numbers', 'num' + i);
        numRow1.textContent = i;
        row1.appendChild(numRow1);
    }
        minus = document.createElement('button');
        minus.classList.add('numbers','minus');
        minus.textContent = '-';
        minus.addEventListener('click', ()=>{
            operation = subtract;
        })
        row1.appendChild(minus);
    //Row 2
    for (let i = 4; i<=6; i++){
        numRow2 = document.createElement('button');
        numRow2.classList.add('numbers', 'num' + i);
        numRow2.textContent = i;
        row2.appendChild(numRow2);
    }
        multiplyButton = document.createElement('button');
        multiplyButton.classList.add('numbers', 'multiply');
        multiplyButton.textContent = 'X';
        multiplyButton.addEventListener('click', ()=>{
            operation = multiply;
        })
        row2.appendChild(multiplyButton);
    //Row 3
    for (let i = 7; i<=9; i++){
        numRow3 = document.createElement('button');
        numRow3.classList.add('numbers', 'num' + i);
        numRow3.textContent = i;
        row3.appendChild(numRow3);
    }
        division = document.createElement('button');
        division.classList.add('numbers', 'division');
        division.textContent = '÷';
        division.addEventListener('click', ()=>{
            operation = divide;
        })
        row3.appendChild(division);

        let allOperators = [addButton,minus,multiplyButton,division];
        allOperators.forEach(op => {
            op.addEventListener('click', ()=>{
                operatorButton = true;
            })
        })

        for (let i = 0; i<=9; i++){
            currentNumber = 'num' + i;
            currentNumberDOM = document.querySelector('.num' + i);
            window[currentNumber] = currentNumberDOM;
            currentNumberDOM.addEventListener('click', (function(index) {
                return function() {
                    if (operatorButton){
                        secondInput = index;
                        values.textContent = index;
                    } else {
                        firstInput = index;    
                        values.textContent = index;
                    }
        }; 
            })(i)); //That's so cool that you can do that...
        };  
}
generateNumbers(); //All opers are add ffs
clearState();

//Addition
function add(n1,n2){
    result = n1 + n2;
}
//Subtraction
function subtract(n1,n2){
    result =  n1 - n2;
}
//Multiply
function multiply(n1,n2){
    result = n1 * n2;
}
//Division
function divide(n1,n2){
    if (n2 === 0){
        values.textContent = 'ERROR: Division by 0 is not allowed by math gods'; //Remember to reduce text size to fill display!
    } else {
        result =  n1 / n2;
    }
}
//Operation 
function operator(n1,oper,n2){
    if (oper === add){
       add(n1,n2);
    } else if (oper === subtract){
       subtract(n1,n2);
    } else if (oper === multiply) {
       multiply(n1,n2);
    } else{
       divide(n1,n2);
    }
};