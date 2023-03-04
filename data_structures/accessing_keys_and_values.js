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

    }

};


console.log(Object.keys(restaurant.openingHours));// this returns an arrays of keys
console.log(Object.values(restaurant.openingHours));// this returns values
const dayy = Object.keys(restaurant.openingHours)
let str = `the no. of days are ${dayy.length} and the days are `
for (day of dayy) {
    str += day;
}
console.log(str);


const va = Object.entries(restaurant.openingHours)//// this returns an arrays of objects of key value pair
console.log(va);

// we can also do mixed destructuring 
for ([dday, { open = 1, close=10 }] of Object.entries(restaurant.openingHours)) {

    console.log(dday, open, close, "\n");


}