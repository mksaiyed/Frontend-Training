//! Spread & Rest Operators in JS (...)
//* Spread Op : separate the array/grp.
//* Rest Op : combine the array/grp.

function sumOne(a, b) {
	return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA)); // Spread Operator
//? because here we pass myA as Array and when we use spread Op then it spread it and separate it and gives to function as a and b

//? Now here we use REST Op and it's work id to combine the all arguments as a Array
//? here first and second is separate but if user pass more values then from 3rd value it comes in args and for REST Op all values stores in Args Array
function sumTwo(a, b, ...args) {
	// Rest Operator
	console.log(args);
	let multi = a * b;
	let sum = 0;
	for (const arg of args) {
		sum += arg;
	}
	return [sum, multi];
}
// here sumTwo gives multi of 1st*2nd and sum of 3rd+4th+.....
console.log(sumTwo(2, 3, 1, 1, 1));

// useful Ex.
function add(...args) {
	console.log(args);
}
const arr = [1, "Two", 3, true];
add(...arr);
