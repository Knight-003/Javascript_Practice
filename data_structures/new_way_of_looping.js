const restaurant = {
    restname: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    

};


for(items of restaurant.categories){

    console.log(items);
}
for(items of restaurant.categories.entries()){ // entry give us array of array in which inner array contains items with index name 

    console.log(items);
}
for([ind,el] of restaurant.categories.entries()){ // we can also do destructuring here 

    console.log(`${ind}  ${el}`);
}

