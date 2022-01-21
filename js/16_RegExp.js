//? Syntax
//? /pattern/modifiers;

//* /w3schools/i  is a regular expression.
//* w3schools  is a pattern (to be used in a search).
//* i  is a modifier (modifies the search to be case-insensitive).

let text1 = "Visit W3Schools";
let n = text1.search(/w3schools/i);
console.log(n);
let text2 = "Visit Microsoft!";
let result = text2.replace(/microsoft/i, "W3Schools");
console.log(result);

//! Regular Expression Modifiers
//* i	Perform case-insensitive matching
//* g	Perform a global match (find all matches rather than stopping after the first match)
//* m	Perform multiline matching

//! Regular Expression Patterns
//? Brackets are used to find a range of characters:
//* [abc]	Find any of the characters between the brackets
//* [0-9]	Find any of the digits between the brackets
//* (x|y)	Find any of the alternatives separated with |

//? Metacharacters are characters with a special meaning:
//* \d	Find a digit
//* \s	Find a whitespace character
//* \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
//* \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

//? Quantifiers define quantities:
//* n+	Matches any string that contains at least one n
//* n*	Matches any string that contains zero or more occurrences of n
//* n?	Matches any string that contains zero or one occurrences of n

//? Using test()
//* The test() method is a RegExp expression method.
//* It searches a string for a pattern, and returns true or false, depending on the result.
//* The following example searches a string for the character "e":

console.log(/e/.test("The best things in life are free!"));

//? Using exec()
//* The exec() method is a RegExp expression method.
//* It searches a string for a specified pattern, and returns the found text as an object.
//* If no match is found, it returns an empty (null) object.
//* The following example searches a string for the character "e":

console.log(/e/.exec("The best things in life are free!"));
