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
//thi is also example of functions in function
let multiply_of_add_div = function (a, b) {
    let c = add(a, b);
    return (c * (a / b));

}

console.log(multiply_of_add_div(5, 2));

//Aero functions
const age = birthyear => 2037 - birthyear;

console.log("the age is " + age(2001));

const retAge = (birthyear) => {
    const age = 2037 - birthyear;
    const ret = 65 - age;
    return (`the time  left for retirement is ${ret} years`);


}



console.log(retAge(2001));

