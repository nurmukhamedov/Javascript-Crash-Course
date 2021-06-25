// For Loop

for (let rep = 1; rep <= 25; rep++) {
    console.log(`Your repetition is ${rep}`);

}

// Arrays with for loop

const myInfo = [
    'Nurmukhamedov',
    2021 - 2000,
    'Tutor',
    'Student',
    'Developer',
    true
];

const types = [];

for (let i = 0; i < myInfo.length; i++) {
    // reading from array
    console.log(myInfo[i], typeof myInfo[i]);
    // filling new array
    types[i] = typeof myInfo[i];
}
console.log(types);

const years = [
    1998,
    2000,
    2001
]

const ages = [];

for (let i = 0; i < years.length; i++) {

    ages.push(2021 - years[i]);

}

console.log(ages);
const myInfo = ['Muhammadrasul', 'Developer', 'teacher', 21];

for (let i = 0; i < myInfo.length; i++) {
    if (typeof myInfo[i] !== 'string') continue;
    console.log(myInfo[i], typeof myInfo[i]);
}
for (let i = 0; i < myInfo.length; i++) {
    if (typeof myInfo[i] === 'string') continue;
    console.log(myInfo[i], typeof myInfo[i]);
}
for (let i = myInfo.length - 1; i >= 0; i--) {
    console.log(myInfo[i]);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`${rep} Your are  ${myInfo[i]} `);
    }
}

let dice = Math.trunc(Math.random() * 6 + 1);

console.log(dice);
