class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(` ${this.firstName} is ${2037 -this.birthYear} years Old`);
    }
}

const jessica = new PersonCl('Jessica', 1998);
const brown = new PersonCl('Brown', 1995);
jessica.calcAge();
brown.calcAge();  

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get carAcc() {
        this.speed += 10;
        console.log(`${this.make} is going to at ${this.speed}`);
    }
    carbrake = function() {
        this.speed -= 10;
        console.log(`${this.make} is going to at ${this.speed}`);
    }
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.carAcc;
