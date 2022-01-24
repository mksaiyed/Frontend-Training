//! Callback in JS

//* A callback is a function passed as an argument to another function
//* This technique allows a function to call another function
//* A callback function can run after another function has finished

function add(x, y, callback) {
	let sum = x + y;
	callback(sum, x, y); // callback
}
function display(sum, x, y) {
	console.log(`Sum of ${x} and ${y} is ${sum}`);
}
add(4, 5, display);

// Callback Arrow
setTimeout(() => {
	console.log("This is called after 2s.");
}, 1000);
