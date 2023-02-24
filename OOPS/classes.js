class human {
    constructor() {
        this.gender = "male"
    }
    //we can also set property directly in es6
    place = "rohtak"
    prt = function () {
        console.log(this.gender);
    }
    prt2 = () => {
        console.log(this.place);
    }



}






class person extends human {
    constructor(str) {
        super();
        this.name = str;
    }
    pr = function () {
        console.log(this.name);
        console.log(this.gender);
    }

}


const nikhil = new person("nikhil");
nikhil.pr()
nikhil.prt()
nikhil.prt2()
console.log(nikhil.place);