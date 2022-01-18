var name = "Kaif"; //String

/*
? Escape Character
*    \'	Single quote
*    \"	Double quote
*    \\	Backslash
*    \b	Backspace
*    \f	Form Feed
*    \n	New Line
*    \r	Carriage Return
*    \t	Horizontal Tabulator
*    \v	Vertical Tabulato
console.log("We are the so-called \"Vikings\" from the north.");
*/

//! String Methods

//? length
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(abc.length); // 26

//? There are 3 methods for extracting a part of a string:
//* slice(start, end)
//* substring(start, end)
//* substr(start, length)

// slice()
let str = "Hello abc";
console.log(str.slice(6, 9)); // abc
console.log(str.slice(6)); // abc
console.log(str.slice(-3)); // abc

// The difference is that substring() cannot accept negative indexes.
console.log(str.substring(2, 7)); // llo a

// The difference is that the second parameter specifies the length of the extracted part.
console.log(str.substr(2, 5)); // llo a
console.log(str.substr(-3, 3)); // abc

//? replace method
// By default, the replace() method replaces only the first match:
var text = "I live in Gandhinagar and Gandhinagar!";
console.log(text.replace("Gandhinagar", "Baroda"));
// I live in Baroda and Gandhinagar!

str.toLowerCase();
str.toUpperCase();
str.trim();
str.charAt();
str.charCodeAt();

//? String to Array
//* A string can be converted to an array with the split() method:
text.split(","); // Split on commas
text.split(" "); // Split on spaces
text.split("|"); // Split on pipe

//? String search method
console.log(text.indexOf("live")); // 2
console.log(text.search("live")); // 2
//* The two methods are NOT equal. These are the differences:
//*     The search() method cannot take a second start position argument.
//*     The indexOf() method cannot take powerful search values (regular expressions
console.log(text.indexOf("am")); // -1

console.log(text.includes("live")); // true
