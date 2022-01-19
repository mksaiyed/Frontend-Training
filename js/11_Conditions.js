//! Conditional (Ternary) Operator

//* variablename = condition ? value1 : value2;

let voteable;
let age = Number(20);
if (isNaN(age)) {
	voteable = "Input is not a number";
	console.log(voteable);
} else {
	voteable = age < 18 ? "Too young" : "Old enough";
	console.log(voteable);
}

//! Conditional Statements
//* Use if to specify a block of code to be executed, if a specified condition is true
//* Use else to specify a block of code to be executed, if the same condition is false
//* Use else if to specify a new condition to test, if the first condition is false
//* Use switch to specify many alternative blocks of code to be executed

/*

if (condition) {
	//  block of code to be executed if the condition is true
}

if (condition) {
	//  block of code to be executed if the condition is true
} else {
	//  block of code to be executed if the condition is false
}

if (condition1) {
	//  block of code to be executed if condition1 is true
} else if (condition2) {
	//  block of code to be executed if the condition1 is false and condition2 is true
} else {
	//  block of code to be executed if the condition1 is false and condition2 is false
}

? Switch statement
switch (expression) {
	case x:
		// code block
		break;
	case y:
		// code block
		break;
	default:
	// code block
}
*/

let day;
switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
}
console.log(day);
