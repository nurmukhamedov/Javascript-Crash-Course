  'use strict';

// // Data needed for a later exercise
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section


// restaurant.orderPizza('mushrooms', 'ketshup', 'olivia', 'mayonez')
//     // Spread operator beacue right side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // Rest becuase on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Rest with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++)
//         sum += numbers[i];
//     console.log(sum);

// };
// add(2, 3);
// add(5, 4, 9, 8, 7);
// const x = [5, 4, 3, 2, 20, 14];
// add(...x);
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via Del sole',
//     starterIndex: 3,
//     mainIndex: 2
// });

// // const newArray = [...restaurant.mainMenu, 'Gnocci']
// // console.log(newArray);

// // // copy array 

// // const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);

// // // join 2 array
// // const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menuNew);

// // destructing arrays

// // const arr = [2, 3, 4];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(a, b, c);
// // console.log(x, y, z);

// // const [h, g] = restaurant.categories;
// // console.log(h, g);
// // const [h, , g] = restaurant.categories;
// // console.log(h, g);

// // let [h, g] = restaurant.categories;

// // const temp = h;
// // h = g;
// // g = temp;
// // console.log(h, g);

// // [h, g] = [g, h];
// // console.log(h, g);
// // //one way switch 
// // const [starter, mainer] = restaurant.order(3, 1);
// // console.log(starter, mainer);
// // // another way switch

// // console.log(restaurant.order(2, 0)); 

// // const nested = [2, 4, [5, 6]];
// // const [i, j, [k, l]] = nested;
// // console.log(i, j, k, l);

// // const [p = 1, q = 1, r = 1] = [8, 9]; // it is useful when we work with Apis
// // console.log(p, q, r);

// // Destructuring Objects

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// // how to change property name?
// // const {
// //     name: restaurantName,
// //     openingHours: hours,
// //     categories: tags
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // // Default values

// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // mutuate variables
// // let a = 885;
// // let b = 650;

// // const obj = { a: 23, b: 27, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // // Nested Objects 
// // const {
// //     fri: { open: o, close: c }
// // } = openingHours
// // console.log(o, c);


// // short circuiting 
// console.log(3 || 'Jonas');
// console.log(undefined || 0);
// console.log(null || 23);

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },

//     printGoals: function({ lewandowski, muller, davies, kimmich }) {
//         console.log(`Lewandowki socred ${lewandowski} goals and Muller played on ${muller}, Davies playes on${davies}, Kimmich played on ${kimmich}`);
//     }
// };

// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);
// const [gk2, ...fieldPlayers2] = player2;
// console.log(gk2, fieldPlayers2);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1final = [...player1, 'Thiago', 'Countinho', 'Perisic'];
// console.log(players1final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// game.printGoals({
//     lewandowski: 2,
//     muller: 20,
//     davies: 17,
//     kimmich: 6
// })

// let firstName = 'Jonas';
// let oldFirstName = firstName;
// firstName = 'Milana';
// console.log(firstName, oldFirstName);

// const jessica = {
//     name: 'David',
//     age: 42
// }
// const marriedJessica = jessica;

// marriedJessica.age = 56;

// console.log(marriedJessica, jessica);  

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day];
    console.log(`On ${day} we open at ${open}`);
}

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${ properties.length } days: `;
for (const day of properties) {
    openStr += ` ${ day } `;
}
console.log(openStr);

const values = Object.values(openingHours);

const entries = Object.entries(openingHours);

for (const [day, { open, close }] of entries) {
    console.log(` On ${day} we open at ${open} and close at ${close}`);
}

// console.log(restaurant.order ? .(1, 0) ? ? 'Method not found');


// const make1 = prompt('what is your favorite laptop company');
// const model1 = prompt('what is your favorite laptop type');
// const year1 = prompt('Year');
// const getLaptop = function(make, model, year) {
//     return {
//         make: make,
//         model: model,
//         year: year
//     }
// }

// console.log(getLaptop(make1, model1, year1));

// function getLaptop2(make, model, year) {
//     return {
//         sayModel: function() {
//             return make;
//         }
//     }
// }
// console.log(getLaptop2("Apple", "MacBook", "2015").sayModel()); 

// const make1 = prompt('what is your favorite laptop company');
// const model1 = prompt('what is your favorite laptop type');
// const year1 = prompt('Year');
// const getLaptop = function(make, model, year) {
//     return {
//         make,
//         model,
//         year,
//     }
// }
// console.log(getLaptop(make1, model1, year1));

// sets

const orderSet = new Set(['Pizza', 'Burger', 'Risotto', 'Pizza', 'KFC', 'Burger', 'Pizza']);

console.log(orderSet.size);
console.log(orderSet.add('Hot-dog'));
console.log(orderSet.has('Chocolate'));
orderSet.delete('Hot-dog');
console.log(orderSet);
orderSet.clear();
console.log(orderSet);

const positions = ['Chef', 'Manager', 'Waiter', 'Chef', 'Waiter', 'Manager'];
console.log(positions);

const uniquePosition = new Set(positions);
console.log(uniquePosition.size);

// Map
const rest = new Map();
rest.set('name', 'Classiso Italiano');
rest.set(1, 'Firenze Italia').set('open', 11).set('close', 22).set(true, 'we are open :D').set(false, 'we are close :(');
console.log(rest);
console.log(rest.size);
console.log(rest.get(true));

const time = 15;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
