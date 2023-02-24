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







const aar = [1, 2, 5];
const newarr = [7, 8, ...aar];
console.log(newarr);

const menue = [...restaurant.mainMenu, "susi"];
console.log(menue);
// copying array 
const narr = [...restaurant.starterMenu];
console.log(narr);
// joining two array
const totalmenue = [...restaurant.mainMenu, ...restaurant.categories];
console.log(totalmenue);
//destructuring operator works only with itrables till es 18 but now objects are exceptation
// itrables are array , string , maps , objects 
let str = "nikhil";
let nam = [...str, "", "hellow"];
console.log(nam);

restaurant.take_odr(...nam);

// now on objects 
const mewRes = { foundedIn: "1999", ...restaurant };
console.log(mewRes);
//also use to copyobject
const rescpy = { ...mewRes };


// rest
function jj(...args) {

    console.log(args[1]);
}


jj(1, 5, 7);

