// Adding Css to Console
// syntax (Just add %c and add css by comma at the end)
// console.log("%cYour msg","Css");
console.log(
	"%cHello",
	"color: red; background-color: yellow; font-size: 20px;"
);

for (var i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 100);
}
// here it's taking i as global variable in var i and when setTimeout called at that time whole loop is been executed and i value will be 3.
// but when we use let then it is block scope for all diff conditions.
for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 100);
}

let g = "Global"; // global var
function myf() {
	let l1 = "local let"; // it's local var you can't access it outside the function.
	var l2 = "local var"; // it's local var you can't access it outside the function.
	g1 = "Global - 1"; // not without any declaration it becomes global var
	console.log(g);
	console.log(l1);
	console.log(l2);
	console.log(g1);
}
myf();
console.log(g1);
// console.log(l1); // l1 is not defined
// console.log(l2); // l2 is not defined
