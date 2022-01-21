//! The JavaScript this keyword refers to the object it belongs to.

/*
* In a method, this refers to the owner object.
fullName : function() {
  return this.firstName + " " + this.lastName;
}
* Alone, this refers to the global object.
let x = this;
* In a function, this refers to the global object.
function myFunction() {
  return this;
}
* In a function, in strict mode, this is undefined.
"use strict";
let x = this;
* In an event, this refers to the element that received the event.
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
* Methods like call(), and apply() can refer this to any object.
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"
* In these examples, this is the person object (The person object is the "owner" of the function):
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};

? This in Arrow functions
* In short, with arrow functions there are no binding of this.
* In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
* With arrow functions the this keyword always represents the object that defined the arrow function.
*/

// call , apply , bind

function add(c, d) {
	return this.a + this.b + c + d;
}
const o = { a: 1, b: 3 };
// both will use o as execution context.

console.log(add.call(o, 5, 7)); // 16
// all arguments separate values

console.log(add.apply(o, [10, 20])); // 34
// value pass as array

const newAdd = add.bind(o);
console.log(newAdd(10, 20)); // 34

function ad() {
	return this.a + this.b;
}
const newAd = ad.bind(o);
console.log(newAd()); //4
