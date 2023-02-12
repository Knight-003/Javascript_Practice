const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterInd, MainInd) {
        return ([this.starterMenu[starterInd], this.mainMenu[MainInd]]);

    }


};
//destructuring is the process in which we copy data from complex datastructures into simpler form for variables
arr = [1, 2, [4, 7]];
const [x, y, z] = arr;
console.log(x, y, z);
const [a, , b] = arr;
console.log(a, b);
let [cat1, , cat2] = restaurant.categories;
console.log(cat1, cat2);

[cat1, cat2] = [cat2, cat1];// we can do swaping easily
console.log(cat1, cat2);
const [s, t] = restaurant.order(2, 0);//destructuring right after 
console.log(s, t);
//nested destructuring
const nested = [2, 4, [1, 2]];
const [q, , e] = nested;
console.log(q, e);
const [f, n, [m, d]] = nested;
console.log(f, n, m, d);
// default values . we generally do this when we dont know how many variables are their 

const [l = -1, g = -1, aa = -1] = [4, 7];//to protect undefine 
console.log(l, g, aa);
