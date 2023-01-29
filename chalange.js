const calAvg = (a, b, c) => (a + b + c) / 3;
const winChk = (x, y) => {
    if (x >= (2 * y)) {
        console.log(`team a wins 
        team a score -> ${x} 
        team b score -> ${y}`);
    }
    else if (y >= (2 * x)) {
        console.log(`team b wins 
        team a score -> ${x} 
        team b score -> ${y}`);

    }
    else {
        console.log(`no one wins 
        team a score -> ${x} 
        team b score -> ${y}`)
    }
}

const apply = (a, b, c, x, y, z) => {
    teamB = calAvg(x, y, z);
    teamA = calAvg(a, b, c);
    winChk(teamA, teamB);
}
apply(85, 54, 41, 23, 34, 27);