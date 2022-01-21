//! Hoisting
//* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
/*
* This means that if we do this:
    console.log(greeter);
    var greeter = "say hello";
*it is interpreted as this:
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello";
*/

//? Hoisting in var
//* So var variables are hoisted to the top of their scope and initialized with a value of undefined.

//? Hoisting in let
//* let declarations are hoisted to the top but the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

//? Hoisting in const
//* Just like let, const declarations are hoisted to the top but are not initialized.
