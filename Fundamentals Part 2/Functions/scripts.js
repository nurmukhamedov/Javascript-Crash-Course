function logger() {
    console.log('My name is Muhammadrasul');
}

// we should call function if we didn't call function it doest'n work
logger();  

function fruitProcess(apple, orange) {
    console.log(apple, orange);
}
fruitProcess(5, 0) // this is argument and directly effect (apple and orange) and result will be 5 and 0  in the console  

function fruitProcess(apple, orange) {
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}
console.log(fruitProcess(10, 2));

const appleOrangeJuice = fruitProcess(7, 3);
const orangeAppleJuice = fruitProcess(3, 7);
console.log(appleOrangeJuice);
console.log(orangeAppleJuice);  

const birthYear = prompt('Qachon tug`ilgansiz');
const currentYear = prompt('Hozir nechanchi yil')

function calcAge(calccurrentYear, calcbirthYear) {
    const calculation = `Your age is ${calccurrentYear - calcbirthYear}`;
    return calculation;
}
console.log(calcAge(currentYear, birthYear));  

const day = function(weekDay) {
    if (weekDay === '1') {
        console.log('Monday');
    }
}
day('1');


const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);
const yourAge = +prompt('Qachon tug`ulgansiz');
const retirementYear = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(retirementYear(2000));

const untilRetirementYear = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(untilRetirementYear(2000, 'Muhammadrasul'));
console.log(untilRetirementYear(1998, 'Jahongir'));
console.log(untilRetirementYear(2001, 'Jonibek')); 
