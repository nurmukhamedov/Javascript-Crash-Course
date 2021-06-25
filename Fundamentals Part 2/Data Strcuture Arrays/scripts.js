// Data structure Arrays

const friends = ['Michael', 'Arthur', 'Mike']; // this is a one way to create Arrays
const newFriends = new Array('Michael', 'Arthur', 'Mike'); // this is a another way to create Arrays

console.log(friends, newFriends);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const year = [1960, 1985, 1900];
console.log(calcAge(year[1])); // we can use array with function like  
// or 
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
console.log(age1, age2, age3);

const friends = ['Mike', 'John', 'David', 'Michael'];
friends.push('Arthur'); // add element to the array  
friends.unshift('Arthur') // add element in the first place
friends.pop(); // remove the last element from the array
const myPop = friends.pop(); // remove element but not the last 
friends.indexOf('David'); //give the value of element 
console.log(friends.indexOf('David')); //result will be 2 because David is situated in the  2nd position
console.log(friends.includes('John')); //result will be true because Mike is an available in the friends array
console.log(friends.includes('Bob')); //result will be false because Mike is not an available in the friends array  

const calcTip = function(calcValue) {
    if (calcValue >= 50 && calcValue <= 300) {
        return calcValue * 0.15;
    } else {
        return calcValue * 0.20;
    }
}
const calcTip = calcValue => {
    return calcValue >= 50 && calcValue <= 300 ? calcValue * 0.15 : calcValue * 0.20;
}

const bill = [125, 555, 444];

const tips = (calcTip(bill[0]), calcTip(bill[1], calcTip(bill[2])));


const total = [
    `${tips + bill[0]} is your total payment`,
    `${tips + bill[1]} is your total payment`,
    `${tips + bill[2]} is your total payment`
]
console.log(total);
