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

//? Converting a JSON Text to a JavaScript Object
let text =
	'{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// It's simple JavaScript string containing JSON syntax
console.log(text);
const obj = JSON.parse(text);
console.log(obj);
