//! "use strict"; Defines that JavaScript code should be executed in "strict mode".
//? You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
//* The "use strict" directive is only recognized at the beginning of a script or a function.

// "use strict";
// x = 3.14; // This will cause an error because x is not declared

// x = 3.14; // This will not cause an error.
// myFunction();

// function myFunction() {
// 	"use strict";
// 	y = 3.14; // This will cause an error
// }

//? Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

//* implements
//* interface
//* let
//* package
//* private
//* protected
//* public
//* static
//* yield

"use strict";
let public = 1500; // This will cause an error
