// function sum(a , b) {
//     console.log("Addition: " + (a + b));
//     console.log("Subtraction: " + (a - b));
//     console.log("Multiplication: " + (a * b));
//     console.log("Division: " + (a / b));
// }   

// sum(10, 5);

// function sum(num1 , num2) {
//     console.log("Addition: " + (num1 + num2));
//     console.log("Subtraction: " + (num1 - num2));
//     console.log("Multiplication: " + (num1 * num2));
//     console.log("Division: " + (num1 / num2));
// }

// // sum (20, 10);

// function add(num1 , num2) {
//     return num1 + num2;
// }

// function subtract(num1 , num2) {
//     return num1 + num2;
// }

// function multiply(num1 , num2) {
//     return num1 + num2;
// }

// function division(num1 , num2) {
//     return num1 / num2;
// }

// comsole.log("Addition: " + add(30, 15));
// comsole.log("Subtraction: " + subtract(30, 15));
// comsole.log("Multiplication: " + multiply(30, 15));
// comsole.log("Division: " + division(30, 15));


function sum(num1,num2){
    sum = num1 + num2;
    console.log(sum);
}

sum(2,3);

function diff(num1,num2){
    diff = num1 - num2;
    console.log(diff);
}

diff(2,3);

function prod(num1,num2){
    prod = num1 * num2;
    console.log(prod);
}

prod(2,3);

function quo(num1,num2){
    if(num2 === 0){
        console.log("Cannot divide by zero");
    } else {
        quo = num1 / num2;
        console.log(quo);
    }
}

quo(2,0);