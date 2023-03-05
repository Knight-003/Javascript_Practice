"use strict"


const orderss = new Set(["pizza","burger","noodles","pizza"]);
console.log(orderss);

console.log(new Set("nikhil")); // breakdowns the string and stores the individual values

console.log(orderss.size);// this gives the size of set 
console.log(orderss.has("pizza"));
orderss.add("apple pie")
orderss.delete("pizza")
// orderss.clear()//this clears the set
// sets are itrables  
for(const items of orderss){
    console.log(items);
}

// this can we used to create an array which has no repeated values

const arr = [1,2,2,4,5]

const newarr= [...new Set(arr)]
console.log(newarr);
// if we want to know the unique elements 
console.log(new Set(arr));
console.log(new Set(arr).size);
