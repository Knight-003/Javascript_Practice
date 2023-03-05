// in objects keys can only be strings 
// but in maps any thing can be a key
//set method on map always returns the updated map
const rest = new Map()

rest.set("1", "delhi,india")
rest.set ("2", "NW , usa")


console.log(rest);
// the set methode also return the updated array and by using this property we can do chaining 

rest
  .set("3", "gujrat, india")
  .set("4", "bihar,india")
  .set("5","punjab,india")

console.log(rest);

// get mehode helps to retrive the value corresponding to a key 
const arr= [1,2]
console.log( rest.get("3"))
// has methode checks for key in map
console.log(rest.has("4"));
//
console.log(rest.delete("4"));

console.log(rest);
// if we use array as a key then it will be different object in heap therefore we have to store it into a variable and then use it as a key 
rest.set(arr,"this is an array")
console.log(rest.get([1,2]));
console.log(rest.get(arr));
