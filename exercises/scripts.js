let number1 = +prompt('Raqam kiriting');
let number2 = +prompt('Raqam kiriting');

if (number1 > number2) {
    console.log(number1);
} else if (number2 > number1) {
    console.log(number2);
} else {
    console.log('Error');
}

const findBig = function(number1, number2) {
    if (number1 >= number2) {
        return number1;
    } else if (number2 >= number1) {
        return number2;
    } else {
        console.log('Error');
    }
};
console.log(findBig(26, 24));  


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 19, 23];

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        console.log(`${numbers[i]} is even`);
    } else {
        console.log(`${numbers[i]} is odd`);
    }
}
