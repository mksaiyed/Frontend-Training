//! Functions in JS

// simple function
function sayHi() {
	console.log("Hii ");
}
sayHi(); // Hii

// using parameters
function sayHello(name) {
	// print variable with using , and var name
	console.log("hello ", name);
	// here we use same useful method to print variable
	console.log(`Hello , ${name} How are you ?`);
}
sayHello();
// hello , undefined
// Hello , undefined How are you ?
sayHello("kaif");
// hello , Kaif
// Hello , Kaif How are you ?

// here we can also return in the functions but it's not printed
// if we want to print it then we have to store it in var and print it via console

//! here is the example of functions in variable

var getUserRole = function (name, role) {
	//   here when we generally define function as like
	//   function getUserRole(name , role){}
	//   but here we use function in variable

	switch (role) {
		case "admin":
			return `${name} is admin`;
			break; //this is not necessary
		case "sub-admin":
			return `${name} is sub-admin`;
			break;
		case "user":
			return `${name} is user`;
			break;
		default:
			return `${name} is trial user`;
			break;
	}
};

var getrole = getUserRole("kaif", "admin");
console.log(getrole); // kaif is admin
// or we can simply use directly
console.log(getUserRole("kaif", "user")); // kaif is user
