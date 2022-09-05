//select elements
total = document.querySelector('span');
zero = document.getElementById("zero");
one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");
equal = document.getElementById("equal");
addition= document.getElementById("addition");
subtraction= document.getElementById("subtraction");
multiplication= document.getElementById("multiplication");
division= document.getElementById("division");
percentage = document.getElementById("percentage");
ac= document.getElementById("AC");
ce = document.getElementById("CE");

//set initial text and value to zero
total.innerText =0;
total.setAttribute("value",zero.value);

const numArr = [zero, one, two, three, four, five, six, seven, eight, nine];

//clearAll
let clearAll = ac.addEventListener("click",()=>{
    total.innerText = zero.value;
    //reset value to zero
    total.setAttribute('value', zero.value);
});

//delete last digit
let clearLast = ce.addEventListener("click",()=> {});

//get value of each clicked element
function getValue() {
    numArr.forEach(num => {
        num.addEventListener("click",()=>{
            //if the displayed number is 0 than change it to the clicked number
            if(total.innerText==0){
                total.innerText = num.value;
            }
            else {
                //if the number is not 0 the append the numbers
                total.innerText += num.value;
            }
            total.setAttribute('value', total.innerText);
        });
    });

}

getValue();

//operations
const add = (valOne, valTwo) => valOne + valTwo;

const subtract=(valOne, valTwo) => valOne - valTwo;

const multiply = (valOne, valTwo) => valOne * valTwo;

const divide= (valOne, valTwo) => valOne / valTwo;

const operate = (operator, valOne, valTwo) => {}
