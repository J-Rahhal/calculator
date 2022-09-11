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
const clearOneDigit = () => {
    currentNumber.innerText = currentNumber.innerText.slice(0,-1);
    currentNum = currentNumber.innerText;
    if(currentNumber.innerText.length == 0) {
        currentNumber.innerText = 0;
        currentNum = "";
   }
}

CE.addEventListener('click', clearOneDigit );

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

//add decimal point
const addDecimal = () => {
    if(!currentNum.includes(".")) {
        currentNum += ".";
        currentNumber.innerText = currentNum;
    }
}

//let the input number take one decimal point
decimal.addEventListener('click', addDecimal);

//display result on click
equals.addEventListener('click', display);

const keyboardPressListener = (e) => {
    e.preventDefault();

    if (e.key >=0 && e.key <=9) getNumber(e.key);
    if (e.key =="Enter" || (e.key =="=" && currentNum!="" &&previousNum!=="")) display();
    if (e.key =="+" || e.key =="-" || e.key =="/") getOperator(e.key)
    if(e.key == "*") getOperator("x");
    if (e.key ==".") addDecimal();
    if(e.key =="Backspace") {
        clearOneDigit();
    }
}


//event listener to window that listens to any keypress
window.addEventListener('keydown', keyboardPressListener);

//turn off calculator
const turnOffCalculator = (e) => {
  let status = (e.target.value === "OFF");
  numbers.forEach(number => {
    if(status){
        number.setAttribute("disabled", status);
        AC.setAttribute('disabled', status);
        CE.setAttribute('disabled', status);
        decimal.setAttribute('disabled', status);
        equals.setAttribute('disabled', status);
        currentNumber.innerText ="";
    }else {
        number.removeAttribute("disabled");
        AC.removeAttribute('disabled');
        CE.removeAttribute('disabled');
        decimal.removeAttribute('disabled');
        equals.removeAttribute('disabled');
        currentNum ="";
        currentNumber.innerText=0;
    }
  });


  operators.forEach(operator => {
    if(status){
        operator.setAttribute("disabled", status);
    }else {
        operator.removeAttribute("disabled");
    }
  });



  e.target.value = status? 'ON' : 'OFF';
}


off.addEventListener('click', turnOffCalculator);
