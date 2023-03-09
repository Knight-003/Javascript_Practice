const Airline = "AirIndia";


console.log(Airline.toLowerCase());
console.log(Airline.toUpperCase());


// fixing capatilization in name

const caps = function (stri) {

    const ne = stri.toLowerCase();

    const nw2 = ne[0].toUpperCase() + ne.slice(1)

    return nw2;

}


// email std

const mails = function (str) {


    return (str.toLowerCase().trim())//  we can do chaining here because str.lower... returns a string and the methode is applied on that returned string

    // in es20 trim right and trimleft also introduced


}


// replacement 1


const priceGB = "192,22 *"

console.log(priceGB.replace(",", "."));
console.log(priceGB.replace("*", "$"));
// or
console.log(priceGB.replace(",", ".").replace("*", "$"));


// replacing multiple

const str = "hellow nikhil, hellow aditya"

// console.log(str.replace("hellow", "Hola").replace("hello", "hola"));
// if we want to replace hellows 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const replaceAll = function(str, old, ne){
     
//    let strcl ;
//    let nwstr 
//    let ini = str.indexOf(old);
//    let en = ini+ (str.length -1)
//    for (let index = inc; index < str.length; index++) {
        
    
//    }
    



// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(str.replace(/hellow/g , "hola"));
// booleans type 
const plane = "Airbus A380neo"

console.log(plane.includes("Airbus"));
console.log(plane.startsWith("A380"));
console.log(plane.endsWith("nik"));
