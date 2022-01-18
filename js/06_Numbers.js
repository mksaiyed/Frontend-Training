let x = 3.14; // A number with decimals
let y = 3; // A number without decimals

let x = 123e5; // 12300000
let y = 123e-5; // 0.00123

// JavaScript will try to convert strings to numbers in all numeric operation
let x = "100";
let y = "10";
let z = x / y; // 10
let z = x * y; // 1000
let z = x - y; // 90
let z = x + y; // 10010 // Here it concat string

let x = 10 / "Hello"; // NaN
let x = 2 / 0; // infinity
let y = -2 / 0; // -infinity

// Methods
let x = 9.656;
x.toFixed(0); // 10
x.toFixed(2); // 9.66
x.toFixed(4); // 9.6560
x.toFixed(6); // 9.656000

let x = 9.656;
x.toPrecision(); // 9.656
x.toPrecision(2); // 9.7
x.toPrecision(4); // 9.656
x.toPrecision(6); // 9.65600
