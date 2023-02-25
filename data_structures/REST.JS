// REST , operator always present on the last part and for this resion their can only be one operator
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
    pizzaOrder: function (maintop, ...others) {

        console.log(maintop, others);
    }

};

const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b, others);//here other is an object 

const [c, , d, ...otherth] = [1, 2, 3, 4, 5, 7, 7];
console.log(c, d, otherth); //the concept of hole is also valid here
// objects


const { sat, ...otherday } = { ...restaurant.openingHours }


console.log(sat, otherday);


const add = function (...args) {
    let si = 0
    for (let r = 0; r < args.length; r++) {

        si = si + args[r];




    }




    return si



}

console.log(add(1, 2, 4));
// methods

restaurant.pizzaOrder("jalapinio", "olivs", "panir")

