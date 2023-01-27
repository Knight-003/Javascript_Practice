"use strict "

//this is function decleration we can use it anywhere in our program
function add(a, b) {


    console.log(`the value of ${a} + ${b} is ${a + b}`);
    return (a + b);
}



let f = add(1, 2);
console.log(f)
// or 
console.log(add(1, 2));
//this is also a type of function
let num = Number('23');
console.log(typeof (num));
// in javascript functions are just a value therefore we can store it in a variable 
//this is function expression and we cant use it before decleration

let multiply2 = function (a, b) {

    return (a * b);
}

console.log(multiply2(5, 2));