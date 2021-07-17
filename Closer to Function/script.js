'use strict' 
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

const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    booking: [],
    book: function(flightNum, name) {
        console.log(` ${name} booked seat on ${this.airline} flight ${this.iatacode}${flightNum} `);

        this.booking.push({ flight: `${this.iatacode } ${flightNum}`, name });
    },

};
lufthansa.book(256, 'Muhammadrasul');
lufthansa.book(410, 'Jessica');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iatacode: 'EW',
    booking: [],
};
const book = lufthansa.book;

book.call(eurowings, 25, 'Jack');
console.log(eurowings);

const uzb = {
    airline: 'Uzairway',
    iatacode: 'UZ',
    booking: [],
}
book.call(uzb, 21, 'Jamshid');
console.log(uzb);
const flightData = [25, 'Monica'];
book.call(uzb, ...flightData);
console.log(uzb);

const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookUz = book.bind(uzb);

bookEw(245, 'Michael');
bookLh(256, 'Steven');
bookUz(145, 'John'); 

lufthansa.planes = 300;
lufthansa.buyplanes = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyplanes.bind(lufthansa));

const addTax = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVat = addTax(0.23);
console.log(addVat(100));

// another way with bind

const addTax2 = (rate, value) => value + value * rate;

// console.log(addTax2(0.1, 200)); 
const addVat2 = addTax2.bind(null, 0.23);
console.log(addVat2(500));

