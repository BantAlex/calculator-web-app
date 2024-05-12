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
        return 'ERROR: Division by 0 is not allowed by math gods'
    } else {
        return n1 / n2;
    }
}
