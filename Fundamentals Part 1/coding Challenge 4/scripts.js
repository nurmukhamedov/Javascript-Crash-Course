
//challange #4
//1 -test
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (89 + 91 + 110) / 3;

// console.log(dolphinsAverage);
// console.log(koalasAverage);  

if (dolphinsAverage > koalasAverage) {
    console.log(' Dolphins are winner');
} else if (koalasAverage > dolphinsAverage) {
    console.log('Koalas are winner');
} else {
    console.log('Draw');
}

 //2 -test
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
    console.log('Dolphins winner');
} else if (koalasAverage > dolphinsAverage && koalasAverage > 100) {
    console.log('Koalas are winner');
} 

tes - 4
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
    console.log('Dolphins winner');
} else if (koalasAverage > dolphinsAverage && koalasAverage > 100) {
    console.log('Koalas are winner');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log('Draw');
} else {
    console.log(' No winner');
}  
