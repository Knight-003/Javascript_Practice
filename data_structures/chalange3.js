const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [45, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// const eventsss = [...new Set(gameEvents.values())]// here we create a set of values of map and then destructure it to form a new array
// console.log(eventsss);

// console.log(gameEvents.delete(64));
// console.log(gameEvents);
const hrs = new Set([17, 45])
for (const [key, value] of gameEvents) {
    const ky = (hrs.has(key)) ? key : null;
    if (ky !== null) { console.log(key, value); }
    
}

const instances =  [...gameEvents.keys()]
const mx =  Math.max(...instances);
console.log(`the avg is ${mx/gameEvents.size}`);


