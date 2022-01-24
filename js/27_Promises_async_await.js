//! Promises Async Await
//* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
//* async makes a function return a Promise
//* await makes a function wait for a Promise

/*
? Async example
* here in this Example We are using Console.log That's why it wil give dos() output after 3s.
* But if we use return then the Dos() is Async and it will give undefine like we have use at below.

const uno = () => {
	console.log("I am One");
    //return "I am One";
};

const dos = () => {
	setTimeout(() => {
		console.log("I am Two in Timeout");
        //return "I am Two in Timeout";
	}, 3000);
	// console.log("I am Two"); // this will execute directly
};

const tres = () => {
	console.log("I am Three");
    //return "I am Three"
};

uno();
dos();
tres();
*/

//! Promises
let p = new Promise((resolve, reject) => {
	let i = 1 + 1;
	if (i == 2) {
		resolve("Success");
	} else {
		reject("Failed");
	}
});
p.then((message) => {
	console.log("In then :", message);
})
	.catch((message) => {
		console.log("In catch :", message);
	})
	.finally(() => {
		console.log("In finally This will always run if it resolve or reject");
	});

//? Promise.all method
const recordVideoOne = new Promise((resolve, reject) => {
	resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
	resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
	resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
	(messages) => {
		console.log(messages);
	}
);

// Useful Ex.
const uno = () => {
	return "I am One";
};

const dos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("I am Two in Timeout");
		}, 3000);
	});
};

const tres = () => {
	return "I am Three";
};

const callMe = async () => {
	const callOne = uno();
	console.log(callOne);

	const callTwo = await dos();
	console.log(callTwo);

	const callThree = tres();
	console.log(callThree);
};

callMe();
