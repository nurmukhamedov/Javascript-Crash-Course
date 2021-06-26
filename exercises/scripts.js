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
