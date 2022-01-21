//! Closer in JS
//! Very IMP for understanding (used in REGEX)
//? here main concept is reference of function (like pointers)

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
	var firstName = "Kaif";
	console.log("I am init");
	function sayFirstName() {
		console.log(firstName);
	}
	return sayFirstName;
}
//* here we return only sayFirstName  "without ()" means it's reference
// now if we call init() then it don't give function o/p bcz it gives the reference
var value = init();
value();
//* here value = sayFirstName (reference) means when we call value() then it's call.
// here firstName Variable is exist till function don't call means if function call then it executed and firstName Doesn't exist in memory that's why we can use reference for this  because when we use reference function don't call directly

//? IMP EX.
function doAddition(x) {
	return function (y) {
		return x + y;
	};
}
var add5 = doAddition(4);
console.log(add5(5));
//* Here we can do this directly like
//* doAddition(4)(5);
//* it's called "Curring".we can do this as many arguments we have like function()()()
console.log(doAddition(4)(5));

// want to create counter then
var counter = (function () {
	let count = 0;
	return function () {
		count++;
		console.log(count);
		return count;
	};
})();
counter();
counter();
counter();
