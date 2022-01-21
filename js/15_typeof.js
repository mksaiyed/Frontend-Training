//! typeof operator in JS

console.log(typeof "John"); // Returns "string"
console.log(typeof 3.14); // Returns "number"
console.log(typeof NaN); //! Returns "number"
console.log(typeof false); //! Returns "boolean"
console.log(typeof "false"); // Returns "string"
console.log(typeof [1, 2, 3, 4]); //! Returns "object"
//* The typeof operator returns "object" for arrays because in JavaScript arrays are objects.
console.log(typeof { name: "John", age: 34 }); // Returns "object"
console.log(typeof new Date()); // Returns "object"
console.log(typeof function () {}); // Returns "function"
console.log(typeof myCar); //! Returns "undefined"
console.log(typeof null); //! Returns "object"

console.log("John".constructor); // Returns function String()
console.log((3.14).constructor); // Returns function Number()
console.log(false.constructor); // Returns function Boolean()
console.log([1, 2, 3, 4].constructor); // Returns function Array()
console.log({ name: "John", age: 34 }.constructor); // Returns function Object()
console.log(new Date().constructor); // Returns function Date()
console.log(function () {}.constructor); // Returns function Function()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(isArray(fruits));
function isArray(myArray) {
	return myArray.constructor === Array;
}
