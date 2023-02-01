const birthYear = [1979, 1965, 2001, 2003, 2005, 2020];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
    console.log(birthYear[i]);
    if (birthYear[i] === 2001) {
        continue;
    }
    else if (birthYear[i] === 2005) {
        break;
    }
    ages[i] = 2037 - birthYear[i];
    // ages.push(2037 - birthYear[i]);


}
console.log(ages)
