
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (true) {
            if (birthYear >= 1981 && birthYear <= 1996) {
                var millenial = "IAN NBYVYVYVYV";
                // Creating NEW variable with same name as outer scope's variable
                const firstName = 'Steven';

                // Reasssigning outer scope's variable
                output = 'NEW OUTPUT!';

                const str = `Oh, and you're a millenial, ${firstName}`;
                console.log(str);

                function add(a, b) {
                    return a + b;
                }
            }
            console.log(millenial + "nikhil is great");
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);


// console.log(age);
// printAge();
//block scoping is a feature of es6 therefore var is not blockscoped // let and const are block scoped
//in case of function ,scope and variable environment is same
// if is a block
//in "if" if we define a var ,as it is not a block scoped and accessable to its parent and parent's parent provided that it,s parent's parent is not a function.  