"use strict "


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