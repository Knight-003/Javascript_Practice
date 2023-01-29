

function tip_percentage(billAmount) {
    if (50 <= billAmount && billAmount <= 300) {
        return 15;
    }
    return 20;
}

function tip_amount(billAmount) {
    tp_per = tip_percentage(billAmount);
    return (billAmount * (tp_per / 100));


}
function total_payable(billAmount) {

    tp_per = tip_percentage(billAmount);
    return ((billAmount * (tp_per / 100)) + billAmount);

}
const bill = [125, 555, 44];
const totPay = [total_payable(bill[0]), total_payable(bill[1]), total_payable(bill[2])];
const tippay = [tip_amount(bill[0]), tip_amount(bill[1]), tip_amount(bill[2])];
console.log(`the tip amount for array are ${tippay}`);
console.log(`total payble amount for respective bill is ${totPay}`);




