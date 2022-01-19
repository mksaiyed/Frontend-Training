//! Arrays

var countries = ["India", "China", "Japan", "USA"];
// another method for declare array
var states = new Array("Gujarat", "Punjab", "Mumbai");

console.log(states[1]);
console.log(states.length);

//? You can replace the value like below not add
states[1] = "MP"; // MP replace Punjab

var user = ["kaif", "kaif@gmail.com", 3, 34, true];
console.log(user);
user.pop(); // true remove
user.pop(); // 34 remove
user.push("hii"); // hii add
console.log(user);
user.unshift("NEW value"); // "NEW Value" will added first at index 0 (before kaif)
console.log(user);
user.shift(); // It remove new added value using unshift like "NEW Value" will remove
console.log(user.indexOf(3)); // 2
console.log(user.indexOf("kaif")); // 0
console.log(user.indexOf("hello")); // if value not found it gives -1

console.log(Array.from("SAIYED")); // [ 'S', 'A', 'I', 'Y', 'E', 'D' ]
// It will separate String into char

//? The splice() method adds new items to an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];

// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);
// ["Banana", "Orange", "Lemon", "Kiwi"];

//* splice to remove element
// fruits.splice(0, 1);
// console.log(fruits);
// ["Orange", "Apple", "Mango"];

//? The slice() method slices out a piece of an array into a new array.
let f1 = fruits.slice(1);
console.log(f1);
// ["Orange", "Apple", "Mango"];

let f2 = fruits.slice(1, 3);
console.log(f2);
// ["Orange", "Apple"];

//* The slice() method creates a new array.
//* The slice() method does not remove any elements from the source array.

console.log(fruits.sort());
// ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.reverse());
// ["Orange", "Mango", "Banana", "Apple"];

//? Numeric sort
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()); //[ 1, 10, 100, 25, 40, 5 ]
//* for perfect sorting we have to add Compare Function.
// for ascending order
points.sort(function (a, b) {
	return a - b;
});
points.sort((a, b) => a - b); // using arrow function
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]
//* now points[0] contains the lowest value
//* and points[points.length-1] contains the highest value

// for descending order
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

//? Array Iteration
const numbers = [45, 4, 9, 16, 25];

//* The forEach() method calls a function (a callback function) once for each array element.
numbers.forEach((n) => console.log(n));

//* The map() method creates a new array by performing a function on each array element.
//* The map() method does not execute the function for array elements without values.
//* The map() method does not change the original array.
const n1 = numbers.map((n) => n * 2);
console.log(n1); // [ 90, 8, 18, 32, 50 ]
console.log(numbers); // [ 45, 4, 9, 16, 25 ]

//* The filter() method creates a new array with array elements that passes a test
const n2 = numbers.filter((n) => n > 10);
console.log(n2); // [ 45, 16, 25 ]

//* The every() method check if all array values pass a test.
const n3 = numbers.every((n) => n > 10);
console.log(n3); // false

//* The some() method check if some array values pass a test.
const n4 = numbers.some((n) => (n = 50));
console.log(n4); // true

//* The find() method returns the value of the first array element that passes a test function
const n5 = numbers.find((n) => n > 10);
console.log(n5); // 45

console.log(fruits.indexOf("Apple")); //3

//* The findIndex() method returns the index of the first array element that passes a test function.
const n6 = numbers.findIndex((n) => n < 5);
console.log(n6); // 1
