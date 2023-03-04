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



// console.log(restaurant.openingHours.mon?.open ?? "not exist");
// console.log(restaurant.openingHours.sat?.open|| "not exist");//there it works upon falsi values and the value of sat open is 0 therefore we use nullish operator
// console.log(restaurant.openingHours.sat?.open?? "not exist");

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]


for (day of days) {

    console.log(restaurant.openingHours[day]?.open ?? "not exist");//[]we use this to access attribute stored in variable


}

//we can also use it with methods 
console.log(restaurant.order?.({ time: 4, mainIndex: 5, id: 5 }) ?? "hellow");

// we can also use  this with array
arr = [{ n: 1, g: 1 }]

console.log(arr[0]?.n ?? "thenga");

