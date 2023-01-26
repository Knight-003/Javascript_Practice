const num = 17;
num >= 18 ? console.log("you are allowed to drink") : console.log("you are not allowed to drink");
// this is actualy an expression therefor it can give back some values 
//therefore we can use it in templeat litral
console.log(`this is your ${num >= 18 ? 'glass of wine🍷' : 'this is your glass of water'}`);
