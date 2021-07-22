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
