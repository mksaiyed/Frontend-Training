//* use of operator

var discount;
var listingPrice = 800;
var sellingPrice = 199;

discount = ((listingPrice - sellingPrice) / listingPrice) * 100;
const discountPrice = Math.round(discount);

console.log(discountPrice + "% OFF");

//! Diff between == & === (coersion)
// ==   check value
// ===  check value and data Type
var user = "2";
if (2 == user) {
	console.log("Condition is true for ==");
}
if (2 === user) {
	console.log("Condition is true for ===");
} else {
	console.log("Condition is False for ===");
}

// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
let x = 100 + 50 * 3;
console.log(x); //250
let y = (100 + 50) * 3;
console.log(y); //450
let z = 100 + 50 - 3;
console.log(z); //147
