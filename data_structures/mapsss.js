// in objects keys can only be strings 
// but in maps any thing can be a key
//set method on map always returns the updated map

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
      [
          'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
      ],
      [
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
      ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
  },
};





const rest = new Map()

rest.set("1", "delhi,india")
rest.set ("2", "NW , usa")


console.log(rest);
// the set methode also return the updated array and by using this property we can do chaining 

rest
  .set("3", "gujrat, india")
  .set("4", "bihar,india")
  .set("5","punjab,india")

console.log(rest);

// get mehode helps to retrive the value corresponding to a key 
const arr= [1,2]
console.log( rest.get("3"))
// has methode checks for key in map
console.log(rest.has("4"));
//
console.log(rest.delete("4"));

console.log(rest);
// if we use array as a key then it will be different object in heap therefore we have to store it into a variable and then use it as a key 
rest.set(arr,"this is an array")
console.log(rest.get([1,2]));
console.log(rest.get(arr));




const mps = new Map([["ques", "this is a sample question"],["1","this is op1"],["2","this is op2"],["3","this is op3"]])
for(const [keys,value] of mps){
   console.log(keys + "" + value);



}
// maps are itrable and therefore we can itrate object by converting it to map 
// to itrate we have to use methods like object.entries
const mps2 = new Map(Object.entries(game))
console.log(mps2);


// we can also convert maps into arrays 


console.log([...mps]);
console.log([...mps.keys()]);
console.log([...mps.values()]);
