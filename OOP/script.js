'use strict';


const Person = function(firstName, birthYear) {
    console.log(this);

    this.firstName = firstName;
    this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2003);
console.log(jonas);
console.log(jonas instanceof Person);
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
    console.log(`${this.firstName} Schmedmant `);
}
jonas.calcAge();
matilda.calcAge();
