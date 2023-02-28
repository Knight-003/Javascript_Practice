// or assignment operator
const o1 = {
    namee: "nikhil",
    numguest: 00

}
const o2 = {

    namee: "hello",
    owner: "microsoft"
}

// o1.numguest = o1.numguest || 10;
// o2.numguest = o1.numguest || 10;
// console.log(o1.numguest);


// same can be done by this methode

// o1.numguest||= 10;
// o2.numguest||= 10;// again this cant work with 0
// therefore nullish assignment operator 
o1.numguest ??= 10;
o2.numguest ??= 10;// simpaly if not defined it defines and update 
// console.log(o1.numguest);
// similarly with & logical assignment operator
o1.owner &&= "ano";
o2.owner &&= "ano"; // simpaly if present then updates otherwise not

console.log(o1.owner);

