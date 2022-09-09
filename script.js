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
        currentNumber.innerText = "";
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

AC.addEventListener('click', ()=>{
    total.textContent =0;
    previous.textContent = "";
});

CE.addEventListener('click', ()=>{
    total.textContent = total.textContent.slice(0,-1);
    if(total.textContent.length==0){
        total.textContent =0;
    }
});

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
    Ans=displayValue;
    total.textContent = Ans;
    // previous.textContent = Ans;
};

//display result on click
equals.addEventListener('click', display);
