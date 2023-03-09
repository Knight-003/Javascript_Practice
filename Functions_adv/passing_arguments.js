const bookings = []





const createbooking = function (flightNum, numpassenger = 1, price = 199 * numpassenger) {

    const booking = {

        flightNum,
        numpassenger,
        price


    }
    console.log(booking);
    bookings.push(booking);

}

createbooking(1717 , 2)
