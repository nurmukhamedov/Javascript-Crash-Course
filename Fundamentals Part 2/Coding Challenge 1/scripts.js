const calcAverage = (a, b, c) => (a + b + c) / 3;
const calcAverage = function(a, b, c) {
    return (a + b + c) / 3;
}
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins2 = calcAverage(85, 33, 91);
const scoreKoalas2 = calcAverage(55, 65, 78);
const scoreDolphins3 = calcAverage(99, 82, 95);
const scoreKoalas3 = calcAverage(35, 32, 45);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log('No team wins');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);
checkWinner(scoreDolphins3, scoreKoalas3);
