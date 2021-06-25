
//coding challange
// Test Data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.95;


// Test Data 2

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;



let markBmi = markWeight / (markHeight ** 2);

let johnBmi = johnWeight / (johnHeight ** 2);

let markHigherBmi = markBmi > johnBmi;

console.log(markBmi);
console.log(johnBmi);
console.log(markHigherBmi);

const firstName = 'Muhammadrasul';
const job = 'programmer';
const birthYear = 2000;
const year = 2037;

const myNews = `I'm ${firstName}, a ${year - birthYear} years old  ${job} `;
console.log(myNews); 


const age = 14;

if (age >= 18) {
    console.log('You can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`You can not start driving license you should wait ${yearsLeft} years`);
}

const birthYear = 2001;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

let markBmi = markWeight / (markHeight ** 2);

let johnBmi = johnWeight / (johnHeight ** 2);


console.log(markBmi);
console.log(johnBmi);

if (markBmi > johnBmi) {
    console.log(`Mark's BMI is higher than john with ${markBmi} index`);
} else {
    console.log(`John's BMI is higher than Mark with ${johnBmi} index`);
}

console.log('10' - '4' - '3' - 2 + '5');
