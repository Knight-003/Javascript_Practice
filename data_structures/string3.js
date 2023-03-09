console.log("i+am+nikhil".split("+"))
console.log("i am nikhil".split(" "));

const newname = ["nikhil".toUpperCase(), "anand"].join()
console.log(newname);


const capatilizename = function (name) {
    const nm1 = name.split(" ");
    const nm2 = [];
    for (const word of nm1) {
        nm2.push(word[0].toUpperCase() + word.slice(1))
    }
    console.log(nm2.join(" "));


}

capatilizename("nikhil anand")



// paddings
const st = "hellow"
console.log(st.padStart(8, "+"))// here 8 is the total no. of letters in string
console.log(st.padEnd(8, "+").padStart(10, "+"))

// masking 



const masker = function (numb) {

    const numbstr = String(numb);
    const sls = numbstr.slice(-4);
    return (sls.padStart(numbstr.length, "X"))




}
console.log(masker(55852584565852885));
// repeat

console.log("hellow ".repeat(5));