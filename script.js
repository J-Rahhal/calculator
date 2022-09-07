//select elements
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const total = document.querySelector('span');
const equals = document.getElementById('equal');
let result = '';
let operand = '';
let sign = '';
let value = '';
let displayValue = '';

//get clicked number
const getNumber= () =>{
    total.innerText = 0;
    numbers.forEach(number => {
        number.addEventListener('click', () =>{
            if(total.innerText==0){
                total.innerText = number.value;
                result = total.innerText;
                total.innerText = number.value;
                operand= number.value;
                total.setAttribute('value', total.innerText);
            }
            else if(displayValue !== '')  {
                total.innerText = displayValue;
                result = displayValue;
                total.setAttribute('value', result);
                operand = number.value;
                total.innerText = operand;
                total.setAttribute('value', total.innerText);
            }

        });
    });

};

//get clicked operator
const getOperator = () => {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
                sign = operator.value;
                console.log(sign);
        });
    });

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
    displayValue = operate(sign, parseFloat(result), parseFloat(operand));
    total.innerText = displayValue;
};

//display result on click
equals.addEventListener('click', display);
getOperator();
getNumber();
