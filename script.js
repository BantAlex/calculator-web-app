//!!!: Make multiple back-to-back calculations without the = button needing to be pressed.
//TODO: Make it so, pressing an operator displayes the symbol in the screen instead of '0'.
//TODO: Make the previous values/inputs appear on screen(maybe above the current input?).
//TODO: Add decimal point.
//TODO: Make it look presentable.
//TODO: Make the result smaller if it overflows the display(18 chars long currently).
//TODO: toFix=> If NaN is on screen, if numbers are pressed, they are added in, with the NaN.
//DOM
let display = document.querySelector('.display');
let values = document.querySelector('.values');
//Operation selector
let plus = document.querySelector('.plus');
let minus =document.querySelector('.minus');
let multiplyButton = document.querySelector('.multiplyButton');
let division = document.querySelector('.division');
let allOperators = [plus,minus,multiplyButton,division];
//Equal/Clear Selectors
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
//Dynamic digit selector and listener
let displayedNum = values.textContent;
for (let i = 0; i<=9; i++){
    currentNum = window['num' + i];
    currentNum = document.querySelector('.num' + i)
    currentNum.addEventListener('click',(index)=>{
        index = i;
        values.textContent += index; //make it the other way around.
        selected = values.textContent; //put values.textContent = variable and then use the variable to add and subract from display
        if (isOperatorPressed){
            values.textContent = values.textContent - '0';
            secondInput = selected;
        } else {
            firstInput = selected;
        }
    })
};
//Variable Decloration
let firstInput;
let secondInput = null;
let isOperatorPressed = false;
let result = 0;
let operation = '';
//All Buttons
function clearState(){
    values.textContent = '';
    values.style.fontSize = "64px";
    firstInput = 0; 
    secondInput = null;
    isOperatorPressed = false;
    result = 0;
}
function generateNumbers(){
//Row 0
    plus.addEventListener('click', ()=>{
        operation = add;
    });
    equals.addEventListener('click', ()=>{
        operator(parseInt(firstInput),operation,parseInt(secondInput));
        if (result === Infinity){
            values.textContent = 'Division by 0 is not allowed by math gods'; 
            values.style.fontSize = "32px";
            setTimeout(function(){clearState();}, 4000); //it clears the state even if user inputs faster than 5k
        } else {
            values.textContent = result;
            firstInput = result; 
        }
        isOperatorPressed = false; 
        if (toString(result.length) > 18){
            result = 'Chill, too much!'
        }
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
            isOperatorPressed = true;
            values.textContent = 0;
        })
    })
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