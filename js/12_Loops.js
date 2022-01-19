//! loops in JS

//? for loop
for (let i = 0; i < 5; i++) {
	console.log(i);
}

//? for each loop
myAry = ["King", "Queen", 23, "Hero"];
myAry.forEach((e) => {
	console.log(e);
});
myAry.forEach((e) => console.log(e)); // 1 line code

//? for in loop
//* for in loop is used for Objects (most of time)
const symbol = {
	yt: "Youtube",
	ig: "Instagram",
	fb: "Facebook",
};
for (const n in symbol) {
	console.log(`key is ${n} & value is ${symbol[n]}`);
}

//? for of loop
//* for of loop is used for iterable objects like Arrays (most of time), Strings, Maps.
const names = ["yt", "ig", "fb", "aws"];
for (const n of names) {
	console.log(n);
}

//? while loop
{
	let i = 0;
	while (i < 5) {
		console.log(i);
		i++;
	}
}
//* here both while & do while loop in { ... } bcz i is already declared  then if we want to declare again same item then it will be an any scope {}
//? do while loop
{
	let i = 0;
	do {
		console.log(i);
		i++;
	} while (i < 5);
}

//? The break statement "jumps out" of a loop.
//? The continue statement "jumps over" one iteration in the loop.
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		break;
	}
	console.log("Number is ", i);
}
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log("Number is ", i);
}
