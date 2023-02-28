// the syntax of writing object is called object litrals 

const days = ["mon","tue","wed","thu", "fri","sat","sun"]

const openingHours0 =  {
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
}
const openingHours =  {
    [days[1]]: {
        open: 12,  // we can also compute the attributes 
        close: 22,
    },
    [days[4]]: {
        open: 11,
        close: 23,
    },
    [`day ${1+2+3}`]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
console.log(openingHours);




const restaurant = {
    restname: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,// we can directly use objects from outside 
   

    order ({ time: l = 4, mainIndex: s, id }) {   //we can also define functions this way 
        console.log(l, s, id);

    }

};