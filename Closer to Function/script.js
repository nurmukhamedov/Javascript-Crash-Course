 
const Arithmetics = {
    add: function(a, b) {
        return `${a} + ${b} = ${a+b}`;
    },
    subtract: function(a, b) {
        return `${a} - ${b} = ${a-b}`
    },
    multiply: function(a, b) {
        return `${a} * ${b} = ${a*b}`
    },
    division: function(a, b) {
        if (b != 0) return `${a} / ${b} = ${a/b}`;
        return `Cannot Divide by Zero!!!`;
    }

}

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));

const greet = function(name) {
    return function(m) {

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('ABC');
greet_message("Welcome To GeeksForGeeks");

function greet2(name) {
    return `Hi!! ${name} `;
}

function greet_name(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`);
}

greet_name(greet2, 'Welcome To GeeksForGeeks', 'JavaScript');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isOddNumber(number) {
    return number % 2
}

const oddNumber = numbers.filter(isOddNumber);
console.log(oddNumber);
const arrgreet = (arrgreeting) => {
    return (arrname) => {
        console.log(` ${arrgreeting} ${arrname} `);
    }
}
const arrheyGreet = arrgreet('Hey');
arrheyGreet('Don');
arrheyGreet('Mike');

const greet = function(greeting) {
    return function(name) {
        console.log(` ${greeting} ${name} `);
    }
}
const heyGreet = greet('Hey');
heyGreet('Jonas');
heyGreet('Jane');
