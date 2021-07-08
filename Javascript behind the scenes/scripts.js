'use strict';

// Variable

console.log(myName);
//console.log(lastName);
//console.log(job);

var myName = 'Muhammadrasul';
const lastName = 'Nurmukhamedov';
let job = 'developer';

// Function
console.log(addDecl(4, 5));
//console.log(addExp(4, 5));
console.log(addArr(4, 5));

function addDecl(a, b) {
    return a + b;
}

const addExp = function(a, b) {
    return a + b;
}
const addArr = (a, b) => a + b; 

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () => {
        console.log(`Hey ${this.firstName}`);
    }
}
jonas.calcAge();
jonas.greet(); // Result undefined because arrow function doesn't have its own function 

let enteredNumber = +prompt('Raqam kiriting')

const calcNumber = function() {
    return enteredNumber * enteredNumber;

}
console.log(calcNumber());
