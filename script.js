//select elements
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const currentNumber = document.getElementById('current-number');
const previousNumber = document.getElementById('previous-number');
const equals = document.getElementById('equal');
const AC = document.getElementById("AC");
const CE = document.getElementById("CE");
const off =document.getElementById('off');
const decimal = document.getElementById('decimal');

let previousNum = '';
let currentNum = '';
let operator = '';
let result = '';

//get clicked number
numbers.forEach(number => {
    number.addEventListener('click',(e)=>{
        getNumber(e.target.value);
    });
});

const getNumber = (number) => {
    if(currentNum.length<=10){
        currentNum +=number;
        currentNumber.innerText= currentNum;
    }
}

//get clicked operator

operators.forEach(sign => {
    sign.addEventListener('click', (e) => {
            getOperator(e.target.value);
    });
});

const getOperator = (sign) => {
    if(previousNum==""){
       previousNum = currentNum;
        operator = sign;
        previousNumber.innerText = previousNum+ " " +operator;
        currentNum = "";
        currentNumber.innerText = 0;
    }else if(currentNum == ""){
        operator = sign
        currentNumber.innerText = 0;
        previousNumber.innerText = previousNum + " " +operator;
        currentNum ="";
    }else {
        display();
        operator = sign;
        previousNumber.innerText = previousNum + " " + operator;
        currentNumber.innerText ="";
        currentNum = "";
    }

}

//clear calculator
AC.addEventListener('click', ()=>{
    previousNumber.textContent = "";
    currentNumber.innerText = 0;
    currentNum = "";
    previousNum ="";
});

//delete one digit at a time
CE.addEventListener('click', ()=>{
   currentNumber.innerText = currentNumber.innerText.slice(0,-1);
   currentNum = currentNumber.innerText;
   if(currentNumber.innerText.length == 0) {
        currentNumber.innerText = 0;
        currentNum = "";
   }
});

const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a / b;

const operate =(operator, a, b) => {
    switch (operator){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case 'x':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        default:
            break;
    }
    return result;
}

//display calculation result
const display= () => {
    let displayValue = operate(operator, parseFloat(previousNum), parseFloat(currentNum));
    currentNumber.innerText = displayValue;
    previousNum = displayValue;
    previousNumber.innerText =previousNum;
    operator = "";
    currentNum = "";
};

//display result on click
equals.addEventListener('click', display);
