/*'use strict';
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "guessed";
document.querySelector(".guess").value = 23;
//////////////////////// event reading/////////////////////////////////////////////////


document.querySelector(".check").addEventListener("click", function () {
    console.log(document.querySelector(".guess").value);
}

// )*/
///////////////////////////////////////////////
let secNumber = Math.trunc(Math.random() * 20) + 1;
let inScore = 20;
let highScore = 0;
console.log(`the sec no. is ${secNumber}`)
function messageDisplay(classs, str) {

    document.querySelector(classs).textContent = str;

}
document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);
    if (document.querySelector(".score").textContent > 1) {


        if (!guess) {

            document.querySelector(".message").textContent = "no number";
            console.log(guess)
        } else if (guess === secNumber) {

            messageDisplay(".message", "congrats");
            document.querySelector(".number").textContent = secNumber;
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".number").style.width = "30rem";
            if (inScore > highScore) {
                highScore = inScore
                document.querySelector(".highscore").textContent = highScore;
            }
        }

        else {
            document.querySelector(".message").textContent = guess > secNumber ? "too high" : "too low";
            inScore--;
            document.querySelector(".score").textContent = inScore;
        }
    } else {



        document.querySelector(".message").textContent = "you louse";

        document.querySelector(".score").textContent = 0;
    }

})


document.querySelector(".again").addEventListener("click", function () {

    secNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`the sec no. is ${secNumber}`)
    document.querySelector(".message").textContent = "Start guessing...";
    inScore = 20;
    document.querySelector(".score").textContent = inScore;
    document.querySelector("body").style.backgroundColor = "#222";





})