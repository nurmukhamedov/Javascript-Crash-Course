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
