//! setTimeout | setInterval

//? setTimeout(() => { }, Time in milliseconds);
//* in this it take time first and then function call once
setTimeout(() => {
	console.log("After 1000ms = 1s it prints");
}, 1000);

//? setInterval(() => { }, Time in milliseconds);
//* in this it run function continues for time intervaL
let i = 0;
setInterval(() => {
	if (i < 10) {
		i++;
		console.log("Interval :", i);
	}
}, 90);

//? ClearInterval/ClearTimeout
//* The clearInterval()/setTimeout() method clears a timer set with the setInterval()/setTimeout() method.

//* To clear Interval/Timeout, use the id returned from setInterval()/setTimeout():

// myInterval = setInterval(function, milliseconds);
// clearInterval(myInterval);

// myTimeout = setTimeout(function, milliseconds);
// clearTimeout(myTimeout);

/* 
? Counter Example
let count = 0;
setInterval(() => {
	if (count < 100) {
		count++;
		console.log(count);
	}
}, 1); // here 1 is milliseconds
setTimeout(() => {
	console.log("Congratulation For 100");
}, 1000);
*/
// If we remove comment and run the example it will give mix output you can check it. (async Js)
