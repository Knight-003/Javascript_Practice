const nikhil = {
    firstNmae: 'Nikhil',
    lastName: 'anand',
    age: 2023 - 2001,
    job: 'Developer',
    friends: ['f1', 'f2', 'f3', 'f4']

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


