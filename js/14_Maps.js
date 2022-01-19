//! Maps in JS

//* A Map holds key-value pairs where the keys can be any datatype.
//* A Map remembers the original insertion order of the keys.

//* new Map()	Creates a new Map
//* set()	Sets the value for a key in a Map
//* get()	Gets the value for a key in a Map
//* delete()	Removes a Map element specified by the key
//* has()	Returns true if a key exists in a Map
//* forEach()	Calls a function for each key/value pair in a Map
//* entries()	Returns an iterator with the [key, value] pairs in a Map
//* size	Returns the number of elements in a Map

// Create a Map
const f = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("apples")); // Returns 500

console.log(fruits.size); // 3

console.log(fruits.has("apples"));
fruits.delete("apples");
console.log(fruits.has("apples"));

console.log(fruits.entries());
for (x of fruits) {
	console.log(x);
}
