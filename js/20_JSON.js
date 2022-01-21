//! JSON (JavaScript Object Notation)

/*
? syntax rules
* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays
{
	"employees":[
 					{"firstName":"John", "lastName":"Doe"},
  					{"firstName":"Anna", "lastName":"Smith"},
  					{"firstName":"Peter", "lastName":"Jones"}
				]
}
*/

//? Converting a JSON Text to a JavaScript Object with JSON.parse().

// It's simple JavaScript string containing JSON syntax
let text = `{ "employees" : [{ "firstName":"John" , "lastName":"Doe" },{ "firstName":"Anna" , "lastName":"Smith" },{ "firstName":"Peter" , "lastName":"Jones" } ]}`;
console.log(text);
const obj = JSON.parse(text);
console.log(obj);

//? Convert a JavaScript object into a string with JSON.stringify().
const myJSON = JSON.stringify(obj);
console.log(myJSON);
// The result will be a string following the JSON notation.
// myJSON is now a string, and ready to be sent to a server:

//* In JSON, functions are not allowed as object values.
//* The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
// means if obj contain any function as key-value then while using stringify it remove that from the obj
