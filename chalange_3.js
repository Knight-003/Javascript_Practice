const teamA_r1 = 97;
const teamA_r2 = 112;
const teamA_r3 = 101;
let avg_A = 101

const teamb_r1 = 88;
const teamb_r2 = 91;
const teamb_r3 = 110;
let avg_B = 101
console.log(avg_A, avg_B);
if (avg_A >= 100 && avg_B >= 100) {

    if (avg_A > avg_B) {
        console.log("Team A wins  ");
    }
    else if (avg_A < avg_B) {
        console.log("Team B wins ");
    }
    else {
        console.log("This match is a draw");

    }
}
else {
    if (avg_A < 100 && avg_B < 100) {
        console.log("NO one can take the trophee");
    }
    else if (avg_A >= 100) {
        console.log("Team a wins");
    }
    else {

        console.log("b wins");
    }
}