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
