const flight = "lh5555"
const passenger1 = {
    fname: "nikhil",
    lname: "anand"
}


const changer = function (obj, flight) {

    flight = "555"

    obj.fname = "changed"


}


changer(passenger1, flight);
console.log(passenger1);

// unlike in c pass by value and pass by ref.. there is only pass by value
// whenever primative datatype is passed it is pass by by value or say formal parameter while if we passes objects it passes as reference 