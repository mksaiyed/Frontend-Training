//! Errors in JS

//* The try statement defines a code block to run (to try).
//* The catch statement defines a code block to handle any error.
//* The finally statement defines a code block to run regardless of the result.
//* The throw statement defines a custom error.

// Ex
var x = 4;
myFunction(x);
function myFunction(x) {
	try {
		if (x == "") throw "is empty";
		if (isNaN(x)) throw "is not a number";
		x = Number(x);
		if (x > 10) throw "is too high";
		if (x < 5) throw "is too low";
		else {
			console.log("No Error.");
		}
	} catch (err) {
		console.log("Error: " + err + ".");
	} finally {
		x = "";
	}
}

let num = 1;
try {
	num.toPrecision(500); // A number cannot have 500 significant digits
} catch (err) {
	console.log(err.name);
}

let a = 5;
try {
	a = b + 1; // b cannot be used (referenced)
} catch (err) {
	console.log(err.name);
}

try {
	eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
	console.log(err.name);
}

try {
	num.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
	console.log(err.name);
}

try {
	decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
	console.log(err.name);
}
