const restaurant = {
    restname: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },


    order: function ({ time: l = 4, mainIndex: s, id }) {   //we can slso do default value by this way
        console.log(l, s, id);

    },

    take_odr: function (a, b, c) {

        console.log(a, b, c);
    }

};










//or short circuting
console.log(null || undefined || 3 || 1);//it skips till one truthy value encounters and if any value not founded then it will print last value
const numguest = 0
let guest = numguest || 10//the drawback is that we cant store 0 in guest
//to counter this we use nullish collision operator
let guest2 = numguest ?? 10
console.log(guest2);



console.log(3 && 4 && null && 0);//it skips till one falsy value found and the first falsy value printed// we can check for if a contdition is true or false

restaurant.take_odr && restaurant.take_odr("d1", "d2", "d3")

