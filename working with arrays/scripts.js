const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrawed ${movement}`);
    }
}
console.log('----------------ForEach-----------------');

movements.forEach(function(movement) {
        if (movement > 0) {
            console.log(`You deposited ${movement}`);
        } else {
            console.log(`You withdrawed ${movement}`);
        }
    }); 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementUsd = movements.map(function(mov) {
    return mov * euroToUsd;
});
console.log(movements);
console.log(movementUsd);

const movementToUsdFor = [];

for (const mov of movements) movementToUsdFor.push(mov * euroToUsd);
console.log(movementToUsdFor);

const movementDescription = movements.map(function(mov, i, arr) {
    if (mov > 0) {
        return `Movement ${i +1}:  You deposited ${mov}  `;
    } else {
        return `You withdrawed ${i + 1}: ${mov} `;
    }
});
console.log(...movementDescription); 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(function(mov) {
    return mov > 0;
});
console.log(deposit);

const depositFor = [];

for (const mov of movements)
    if (mov > 0) {
        depositFor.push(mov);
    };
console.log(depositFor);


const withdrawls = movements.filter(function(mov) {
    return mov < 0;
});
console.log(withdrawls);   

const array1 = [1, 2, 3, 4];

const reduceFun = function(accum, currentVal) {
    return accum + currentVal;
}
console.log(array1.reduce(reduceFun, 5));

const reduceFunRes = array1.reduce(function(acc, currVal) {
    return acc + currVal;
});
console.log(reduceFunRes);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(acc, val, i, arr) {
    console.log(`Iteration ${i} ${acc}`);
    return acc + val;
})
console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

const arr1 = [1, 2, 3, [4, 5, [6, 7]]];

const arrFlat = arr1.flat(2);
console.log(arrFlat);

const namesPupils = ['jonas', 'Bob', 'Alex', 'Jhonny'];

console.log(namesPupils.sort());
