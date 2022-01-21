//! Set in JS

//* A JavaScript Set is a collection of unique values.
//* Each value can only occur once in a Set.

//* new Set()	Creates a new Set
//* add()	Adds a new element to the Set
//* delete()	Removes an element from a Set
//* has()	Returns true if a value exists in the Set
//* forEach()	Invokes a callback for each element in the Set
//* values()	Returns an iterator with all the values in a Set
//* size	Returns the number of elements in a Set

// Create a Set
const l = new Set(["a", "b", "c"]);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters.size); // 3
// Now adding  same value then it will not added
letters.add("c");
letters.add("c");
console.log(letters.size); // 3

console.log(letters.values());

for (x of letters.values()) {
	console.log(x);
}

// forEach
letters.forEach((x) => console.log(x));
