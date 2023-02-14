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
//passing array and then destructuring it in function 
restaurant.order({

    // time: 2,
    mainIndex: 5,
    id: 44


})


const { restname, mainMenu } = restaurant;
// console.log(restname, mainMenu);

const {
    restname: restaurentName,   //here we give a alias name to object attribute
    mainMenu: menue

} = restaurant;

// console.log(restaurentName, menue);


// DEFAULT VALUE
const { starterMenu = [], specialmenu = [] } = restaurant; // we give a default value to prevent 
console.log(starterMenu, specialmenu);

//mutating already decleared value 
let a = 3;
let b = 4;
const obj = { a: 1, b: 8, c: 44 };
({ a, b } = obj);
const { c } = obj;
// console.log(c);
// console.log(a, b);


// NESTED DESTRUCTURING
const {
    openingHours: { fri: { open: friop, close: friclo }, thu: { open: thuop, close: thuclo } }

} = restaurant;
// console.log(thuclo);















