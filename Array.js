const arr = ['name1', 'name2', 'name3', 'name4'];
arr[2] = 'nikhil'//we an do this beacuse array is a derived data type howerver we cant do arr=[1,4]
console.log(arr);
const years = new Array(1900, 2000, 3000, 2001);
console.log(years);
console.log(arr.length);
console.log(years[(arr.length) - 1]);

let birthYear = 2001;
const arr5 = [birthYear, 'nikhil', 2037 - 2001];
console.log(arr5);
const age = birthyear => 2037 - birthyear;

const ages = [age(years[0]), age(years[(years.length) - 1])];
console.log(ages);

//////////array operation////////////////////////
const friends = ['f1', 'f2', 'f3', 'f4'];
//adding
console.log(friends.push('f5'));//adds value at last
console.log(friends);
console.log(friends.unshift('f0'));//adds value at initial
console.log(friends);
//removing
console.log(friends.pop());
console.log(friends);
console.log(friends.shift());
console.log(friends);


// indexing
console.log(friends.indexOf('f1'));
console.log(friends.includes('f1'));//es6 feature

