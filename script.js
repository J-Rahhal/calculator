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

zero.addEventListener("click",()=> total.innerText=zero.value);
one.addEventListener("click",()=> total.innerText=one.value);
two.addEventListener("click",()=> total.innerText=two.value);
three.addEventListener("click",()=> total.innerText=three.value);
four.addEventListener("click",()=> total.innerText=four.value);
five.addEventListener("click",()=> total.innerText=five.value);
six.addEventListener("click",()=> total.innerText=six.value);
seven.addEventListener("click",()=> total.innerText=seven.value);
eight.addEventListener("click",()=> total.innerText=eight.value);
nine.addEventListener("click",()=> total.innerText=nine.value);

function add(valOne, valTwo){}

function subtraction(valOne, valTwo){}

function multiply(valOne, valTwo){}

function divide(valOne, valTwo){}
