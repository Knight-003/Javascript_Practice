const billAmount = 3000;
const tip_amount = (50 <= billAmount && billAmount <= 300) ? '15' : '20';
console.log(`your bill amount is inr ${billAmount} and tip amount is ${billAmount * (Number(tip_amount) / 100)} \n final bill ampont = ${billAmount + (billAmount * (Number(tip_amount) / 100))}  `);
