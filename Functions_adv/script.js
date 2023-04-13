const pollButton = document.querySelector(".poll")
const disp = document.querySelector(".buy")
const polll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    recordNewPole: function () {
        plasn = Number(prompt(`${this.question}\n ${this.options.join('\n')}`));


        if (plasn === 0) {
            this.answers[0] += 1;
        } else if (plasn === 1) {

            this.answers[1] += 1;
        } else if (plasn === 2) {
            this.answers[2] += 1;
        } else if (plasn === 3) {

            this.answers[3] += 1;
        }
        this.displayResult()
    },
    displayResult: function () {

        const typ = prompt("type the type")

        if (typ === "str") {

            console.log(`the result are ${this.answers.join(" ")}`);

        } else if (typ === "arr") {
            console.log(this.answers);
        }

    }
}
pollButton.addEventListener('click', polll.recordNewPole.bind(polll));
disp.addEventListener('click', polll.displayResult.bind(polll));