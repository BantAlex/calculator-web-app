//DOM
let display = document.querySelector('.display');
let buttons = document.querySelector('.calc-buttons');
let row0 = document.querySelector('.row0')
let row1 = document.querySelector('.row1')
let row2 = document.querySelector('.row2')
let row3 = document.querySelector('.row3')
let values = document.querySelector('.values');
//Dynamic digit selector
for (let i = 0; i<=9; i++){
    window['num' + i] = document.querySelector('.num' + i)
};
//Operation selector
let plus = document.querySelector('.plus');
let minus =document.querySelector('.minus');
let multiplyButton = document.querySelector('.multiplyButton');
let division = document.querySelector('.division');

let allOperators = [plus,minus,multiplyButton,division];

let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
//Variable Decloration
let firstInput;
let secondInput;
let operatorButton = false;
let result = 0;
//All Buttons
function clearState(){
    values.textContent = '';
    values.style.fontSize = "64px";
    firstInput = 0; 
    secondInput = 0;
    operatorButton = false;
    result = 0;
}
function generateNumbers(){
    //Row 0
        plus.addEventListener('click', ()=>{
            operation = add;
        });
        equals.addEventListener('click', ()=>{
            operator(firstInput,operation,secondInput);
            if (operation === divide && secondInput === 0){
                values.textContent = 'ERROR: Division by 0 is not allowed by math gods'; 
                values.style.fontSize = "32px";
                setTimeout(function(){clearState();}, 5000); //it clears the state even if user inputs faster than 5k
            } else {
                values.textContent = result;
            }
            firstInput = 0; 
            secondInput = 0;
            operatorButton = false;
        })
        clear.addEventListener('click', ()=>{
            clearState();
            values.textContent = '';
        });
        //Row 1
        minus.addEventListener('click', ()=>{
            operation = subtract;
        })
    //Row 2
        multiplyButton.addEventListener('click', ()=>{
            operation = multiply;
        })
    //Row 3
        division.addEventListener('click', ()=>{
            operation = divide;
        })
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
generateNumbers();
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
    result =  n1 / n2;
}
//Operation 
function operator(n1,oper,n2){
    if (oper === add){
       add(n1,n2);
    } else if (oper === subtract){
       subtract(n1,n2);
    } else if (oper === multiply) {
       multiply(n1,n2);
    } else {
       divide(n1,n2);
    }
};