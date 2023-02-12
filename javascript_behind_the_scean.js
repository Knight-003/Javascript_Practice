
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
//         if (true) {
//             if (birthYear >= 1981 && birthYear <= 1996) {
//                 var millenial = "IAN NBYVYVYVYV";
//                 // Creating NEW variable with same name as outer scope's variable
//                 const firstName = 'Steven';

//                 // Reasssigning outer scope's variable
//                 output = 'NEW OUTPUT!';

//                 const str = `Oh, and you're a millenial, ${firstName}`;
//                 console.log(str);

//                 function add(a, b) {
//                     return a + b;
//                 }
//             }
//             console.log(millenial + "nikhil is great");
//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);


// // console.log(age);
// // printAge();
// //block scoping is a feature of es6 therefore var is not blockscoped // let and const are block scoped
// //in case of function ,scope and variable environment is same
// // if is a block
// //in "if" if we define a var ,as it is not a block scoped and accessable to its parent and parent's parent provided that it,s parent's parent is not a function.
// // JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.

// //When a function is executed, a new variable environment is created within the function, and any variables declared within the function are added to this environment. This helps to prevent naming conflicts between variables declared in different parts of the code, since each function has its own isolated variable environment

// ////////////////////////////why we dont use var ///////////////////////////////////////////////////////////////////////////


// if (!t) {
//     add()

// }//this is the flaw t =10 that is truthy and not of it is false and add should not be executed but it executes becauese t is set to undefine which is a falsi value
// var t = 10;

// function add() {
//     console.log("hellow")
// }


// let v = 54;
// const c = 55;
// var d = 66;
// console.log(d === window.d);//var creates a attribute in window object which is not good


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //if we define a methode in an object with a use of this key word in it ,then it contain the value name of object not because it is defined under that object,but it contains it because it is called with object
// // const retAge = (birthyear) => {
// //     const age = 2037 - birthyear;
// //     const ret = 65 - age;
// //     console.log(this);//aerow function does't get its this keyword . the this keyword in aerow is lexical this keyword that means it points  to its parent scope which in this case is window
// //     return (`the time  left for retirement is ${ret} years`);



// // }
// // console.log(retAge(44));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var firstName = 'Matilda';// this creates an attribute in window object and if an aerow function methode access this.firstname methode within jonas then as aero function not get its this keyword it take value from its parent which is window and var creates firstname as an attribute in window object therefore this will create a mess.

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1
//         // const self = this;



//         // self or that// before es6 if we have to call a function (normaly) in a object methode and also decleared in that methode then we have to decleare a extra variable and then copy "0this" keyword because in normal  function call "this" keyword is undefined but in aerow function this keyword is lexical "this" therefore it takes this keyword form its parent which is pointing to that object which calls the parent function.



//         // const isMillenial = function () {
//         //   console.log(self);
//         //   console.log(self.year >= 1981 && self.year <= 1996);
//         // };

//         // Solution 2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);//we can access more argument than that actualy decleared by treating argument an an array
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);

/////////////////////////////////////reference and premative values///////////////////////////////////


// whenever we define a variabe , the name of the variable points to address of memory location where value of that variable is stored. now if we decl. 2nd variable and equate it with first one then it simply points to that memory address . if we update first one then second address creates and updated value stored to that address and the 2nd variable still points to the old address
