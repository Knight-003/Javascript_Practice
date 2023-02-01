const nikhil = {
    firstNmae: 'Nikhil',
    lastName: 'anand',
    bYear: 2001,
    job: 'Developer',
    friends: ['f1', 'f2', 'f3', 'f4'],
    //we can also create a methode here and also use it to create an atribute
    calAge: function () {

        this.age = 2037 - this.bYear;//here "this" keyword is like self in python .. this keyword stores name of the object that calls it .
        return (this.age);


    }

}
console.log(nikhil);
console.log(nikhil.firstNmae);//this is dot notation
console.log(nikhil['firstNmae']);//this is bracket notation

// const nl = 'Nmae';
// console.log(nikhil['first' + nl]);//this can be a string literal and we cant do it with dot notation

// const imp = prompt('hellow')
// if (nikhil[imp]) {
//     console.log(nikhil[imp]);
// } else {
//     console.log("wrong input ");

// }
nikhil['job'] = 'sd2';
nikhil['pro'] = 'yes';
console.log(nikhil);
//////////////////////////////////////////////////////////////exercise present/////////////////////////////
console.log(`${nikhil.firstNmae} has ${nikhil.friends.length} friends`);
////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log(nikhil.calAge())
/////////////////////////////////////////////////
console.log(`${nikhil.firstNmae} is of ${nikhil.age} years`);
