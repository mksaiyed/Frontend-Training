//! Function Statement (Simple Function) aka Function Declaration
// function a() {
// 	console.log("a Called");
// }
// a();

//! Function Expression (Function in Variable)
// here function acts like value
// var b = function () {
// 	console.log("b Called");
// };
// b();

//! Diff Between Function Statement & Function Expression
// Diff comes bcz of Hoisting
// a(); // a Called
// b(); // Error B is not a Function
function a() {
	console.log("a Called");
}
var b = function () {
	console.log("b Called");
};

//! Named Function Expression
var c = function xyz() {
	console.log("c Called");
	// But here You can use xyz bcz here xyz is defined
	console.log(xyz);
};
// c(); // c Called
// xyz(); // Reference Error  xyz not found

//! Diff between Parameters & Arguments
let argument1 = "Hello";
let argument2 = "Hii";
f(argument1, argument2); // here values call as Arguments
function f(parameter1, parameter2) {
	// here values call as Parameters
	console.log(parameter1, parameter2);
}

//! First Class Function in JS (First Class Citizens)
//* The ability to use functions as Values in Function is called first class functions
var d = function (param1) {
	console.log("d Called");
	console.log(param1);
};
function argFn() {}
d(argFn);
// Another Ex.
var abc = function (param1) {
	console.log("xyz Called");
	console.log(param1);
	return function returnFn() {};
};
console.log(abc(function () {}));

//! The Method of using function as argument and return as function  is called First Class.
//! But The Function itself xyz who takes function as argument or return as function is called Higher-Order Function.
//! & the function who pass as argument or in return it's called as CallBack Function.
