const fruits = ['apple','mango','water melon'];

// 1. imperative C style

// function transform(fruits) {
//     let output = [];
//     fruits.forEach(function(fruit) {
//         output.push(`I like ${fruit}`);
//     });
//     return output;
// }

// const result = transform(fruits);
// console.log(result);

// 2. Declarative Style - Js Way

// let output = fruits.map(function(fruit) {
//     return `I like ${fruit}`;
// });
// return output;

// OR Double "Return"

// return fruits.map((fruit) => {
//     return `I like ${fruit}`;
// });

// OR

// ES6
console.log(fruits.map(fruit => `I like ${fruit}`));