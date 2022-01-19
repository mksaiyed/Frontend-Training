//! Math Properties (Constants)

console.log(`
Math.E  :  ${Math.E}        // returns Euler's number
Math.PI : ${Math.PI}       // returns PI
Math.SQRT2  :  ${Math.SQRT2}    // returns the square root of 2
Math.SQRT1_2    :    ${Math.SQRT1_2}  // returns the square root of 1/2
Math.LN2    :    ${Math.LN2}      // returns the natural logarithm of 2
Math.LN10   :   ${Math.LN10}     // returns the natural logarithm of 10
Math.LOG2E  :  ${Math.LOG2E}    // returns base 2 logarithm of E
Math.LOG10E : ${Math.LOG10E}   // returns base 10 logarithm of E
`);

//! Math Methods

//? Math.round(x) returns the nearest integer:
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

//? Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.9)); // -4

//? Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5

//? Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

//? Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1

//? Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(4, 3)); // 64 = 4^3

//? Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64)); // 8

//? Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.5)); // 4.5

//? Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

//? Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 11)); // Returns a random integer from 0 to 10:
console.log(Math.floor(Math.random() * 10) + 1); // Returns a random integer from 1 to 10:
