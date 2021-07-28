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
// Inheritance between contructor function
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}
const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

const mike = new Student('Dave', 1996, 'Computer Sciense');
console.log(mike);
mike.calcAge();

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(` ${this.firstName} is ${2037 -this.birthYear} years Old`);
    }
}

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear); // Always needs to happen first
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
}
const martha = new StudentCl('Martha', 2002, 'Computer Sciense');
console.log(martha);
martha.introduce();
martha.calcAge();

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
    }
}
const acc1 = new Account('David', 'EUR', 1111);
console.log(acc1);
