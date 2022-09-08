//select elements
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const total = document.getElementById('current-number');
const previous = document.getElementById('previous-number');
const equals = document.getElementById('equal');
let result = '';
let operand = '';
let sign = '';
let value = '';
let displayValue = '';

//get clicked number
numbers.forEach(number => {
    number.addEventListener('click',(e)=>{
        getNumber(e.target.value);
    });
});

const getNumber = (number) => {
    if(operand.length<10){
        operand +=number;
        total.textContent= operand;
    }
}

//get clicked operator

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
            getOperator(e.target.value);
    });
});

const getOperator = (operator) => {
    result = operand;
    sign = operator;
    previous.textContent = result +sign;
    operand = "";
    total.textContent = "";


}

const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a / b;

const operate =(operator, a, b) => {
    switch (operator){
        case '+':
            value = add(a,b);
            break;
        case '-':
            value = subtract(a,b);
            break;
        case '*':
            value = multiply(a,b);
            break;
        case '/':
            value = divide(a,b);
            break;
        default:
            break;
    }
    return value;
}

//display calculation result
const display= () => {
    displayValue = operate(sign, parseFloat(operand), parseFloat(result));
    // previous.textContent = displayValue;
    total.textContent = displayValue;
};

//display result on click
equals.addEventListener('click', display);
