console.log("Hello World 🔥");
/*
! JavaScript can "display" data in different ways:
    * Writing into an HTML element, using innerHTML.
    * Writing into the HTML output using document.write().
    * Writing into an alert box, using window.alert().
    * Writing into the browser console, using console.log().
    * JavaScript does not have any print object or print methods.
        * The only exception is that you can call the window.print() method in the browser to print the content of the current window.
*/

// This is one line comment
/* 
This is Multiple-line
Comment
in JavaScript
*/

//! Variables

// Var have Global scope
var fname = "KaiF";
let email = "Kaif@gmail.com";
const no = "123";
//const value cannot be changed once assigned

console.log(fname + email + no);
// KaiFKaif@gmail.com123
console.log(fname, email, no);
// KaiF Kaif@gmail.com 123
console.log("Name : " + fname + " Email :" + email + " No : " + no);
// Name : KaiF Email :Kaif@gmail.com No : 123
console.log(`Name : ${fname} \nEmail : ${email} \nNo : ${no}`);
// Name : KaiF
// Email : Kaif@gmail.com
// No : 123
//* Here we use backtick (` `) It's called as Template Literals

// ! let variable

//? let cannot be redeclared.
// let x = "John Doe";
// let x = 0;
// SyntaxError: 'x' has already been declared
//* But with var you can

//? let have Block Scope.
{
	let x = 2;
}
// x can NOT be used here

//? let must be Declared before use.
//* It's called as Hoisting in JavaScript.
// carName = "Volvo";
// let carName;
//* Meaning: Using a let variable before it is declared will result in a ReferenceError

//! const variable
//? const cannot be Redeclared.

//? const have Block Scope.

//? const cannot be Reassigned.
// const PI = 3.141592653589793;
// PI = 3.14; // This will give an error

/*
! Use const when you declare:
    A new Array
    A new Object
    A new Function
    A new RegExp
    
! IMP
*It does not define a constant value. It defines a constant reference to a value.

?Because of this you can NOT:
    Reassign a constant value
    Reassign a constant array
    Reassign a constant object
?But you CAN:
    Change the elements of constant array
    Change the properties of constant object
*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign the array:
// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
