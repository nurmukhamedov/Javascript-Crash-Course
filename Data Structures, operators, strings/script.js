 'use strict';

// // Data needed for a later exercise
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({ starterIndex, mainIndex, time, address }) {
//         console.log(`Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`);
//     },
//     orderPasta: function(ing1, ing2, ing3) {
//         console.log(`Here is your delicipus pasta with ${ing1}, ${ing2}, ${ing3}`);
//     },
//     orderPizza: function(mainIng, ...otherIng) {
//         console.log(mainIng);
//         console.log(otherIng);
//     },

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
// };

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

// // const ingredients = [prompt("let/'s choose ingredients1"), prompt("choose ingredients2"), prompt("choose ingredients3")];
// // console.log(restaurant.orderPasta(...ingredients));

// // restaurant.orderDelivery({
// //     time: '22:30',
// //     address: 'Via Del sole',
// //     starterIndex: 3,
// //     mainIndex: 2
// // });

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
