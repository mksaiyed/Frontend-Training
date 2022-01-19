//! Boolean in Js

console.log(10 > 9); // true
console.log(Boolean(10 > 9)); //true

//? Everything With a "Value" is True
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("Hello"));
console.log(Boolean(7 + 1 + 3.14));
console.log(Boolean(true)); // true
console.log(Boolean("false"));
//* but false without "" gives false
console.log(Boolean(false)); // false

//? Everything Without a "Value" is False
//? All falsy values
//* The Boolean value of 0 (zero) is false:
//* The Boolean value of -0 (minus zero) is false:
//* The Boolean value of "" (empty string) is false:
//* The Boolean value of undefined is false:
//* The Boolean value of null is false:
//* The Boolean value of false is (you guessed it) false:
//* The Boolean value of NaN is false:
