
//Obejects 

const myArray = ['Muhammadrasul', 'Programmer', 20]; // this is array
console.log(myArray);

const myObject = { // this is object
    name: 'Muhammadrasul',
    job: 'programmer',
    age: 2021 - 2000
}
console.log(myObject.name);

const info = {
        firstName: 'Muhammadrasul',
        lastName: 'Nurmukhamedov',
        age: 21
    }
    //console.log(info['firstName']); // Bracket notation
    //console.log(info.firstName); // Dot notation  

const keyName = 'Name';
console.log(info['first' + keyName]); // concatination works here
// console.log(info.last + keyName);  // doesn't work

const jonas = {
    name: 'Jonas',
    lastName: 'Schmedmant',
    birthYear: 1991,
    friends: ['Mikel', 'John', 'Dave'],
    driversLicense: true,
    calcAge: function() {
        return 2037 - this.birthYear;
    },
    getSummary: function() {
        return `${this.name} is ${this.calcAge()}-years old he has a friend which is named ${this.friends[0]} and he has ${this.driversLicense ? 'a': 'no'} driver license`;
    }

};
console.log(jonas.calcAge());
console.log(jonas.getSummary());
