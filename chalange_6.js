const nikhil = {

    firstName: 'Nikhil',
    height: '5.4',
    weight: '60',
    calBmi: function () {
        this.bmi = (this.weight) / (this.height ** 2);
        return (this.bmi);



    }


}
const aditya = {

    firstName: 'Aditya',
    height: '5.3',
    weight: '65',
    calBmi: function () {
        this.bmi = (this.weight) / (this.height ** 2);
        return (this.bmi);



    }


}

if (nikhil.calBmi() > aditya.calBmi()) {
    console.log(`Nikhil has a greater BMI with a Bmi of ${nikhil.bmi} \n aditya has a bmi of ${aditya.bmi}`);
} else {
    console.log(`aditya has a greater BMI with a Bmi of ${aditya.bmi} \n nikhil has a bmi of ${nikhil.bmi}`);
}