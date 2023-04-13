const airindia = {

  airline: "airindia",
  iataCode: "ARI",
  bookings: [],
  book(flightNum, nam) {

    console.log(`${nam} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({

      flight: `${this.iataCode}${flightNum}`,
      naame: nam


    })

  }




}

airindia.book(123, "nikhil anand")
// if we want to use book in another object then we can't do this directly 
// we have to manupulate the this keyword 


const airasia = {

  airline: "Airasia",
  iataCode: "AAS",
  bookings: []
}


const book = airindia.book;

book.call(airasia, 123, "amit")
const det = [145, "mukesh"]
book.call(airasia, ...det)
//  binding methods 

book2 = book.bind(airasia)



book2(555, "system")


// whenever we call method , to an element the this keyword points to that element
// therefore we have to use bind methode
// bind methode binds the this keyword but it can also bind  other arguments 



// document.querySelector('click', book.bind(airasia))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const addVAT=(rate , value)=>  value+  value*rate;


const addVAT2 =addVAT.bind(null,0.3);


console.log(addVAT2(100));