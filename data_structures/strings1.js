const airline = "Airforce One"
const aeroplane = "boeing 737 MAX"


console.log(airline[2]);
console.log("Nikhil"[4]);

console.log(airline.length);
console.log("nikhil".length);

console.log(airline.indexOf("A"));
console.log(airline.indexOf("One"));//it returns the index of "O"


console.log(airline.slice(4));// first one is inclusive and starting index
console.log(airline.slice(4,6));// last one is exclusive 


console.log(airline.slice(1,-1));// starts from 1th index and trim last one character
// we can apply methods because behid the sceans js converts primative datatype to an object and then we can use the methods

const s = new String("hellow")//now on this object we can perform all the methods

console.log(airline.slice(-2));






