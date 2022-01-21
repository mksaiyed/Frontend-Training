//! Date in JS
//* new Date()
//* new Date(year, month, day, hours, minutes, seconds, milliseconds)
//* new Date(milliseconds)
//* new Date(date string)

const d1 = new Date();
console.log(d1);

// For display date in String and in (India Standard Time)
console.log(d1.toString()); //  (India Standard Time)
console.log(d1.toUTCString()); // UTC String
console.log(d1.toDateString()); // more readable format:
console.log(d1.toISOString()); // ISO standard format

const d2 = new Date(2022, 0, 18, 10, 30, 50, 0);
console.log(d2);

//* Works and display date as above
// const d2 = new Date(2022, 0, 18, 10);
// const d2 = new Date(2022, 0, 18);
// const d2 = new Date(2022, 0);
//* But if you provide only one parameter it will consider as milliseconds
// const d2 = new Date (2022)

//? Date Get methods
//* getFullYear()	Get the year as a four digit number (yyyy)
//* getMonth()	Get the month as a number (0-11)
//* getDate()	Get the day as a number (1-31)
//* getHours()	Get the hour (0-23)
//* getMinutes()	Get the minute (0-59)
//* getSeconds()	Get the second (0-59)
//* getMilliseconds()	Get the millisecond (0-999)
//* getTime()	Get the time (milliseconds since January 1, 1970)
//* getDay()	Get the weekday as a number (0-6)
//* Date.now()	Get the time. in milliseconds

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(Date.now());

// same as get there is SET methods also
// ex.
console.log(date.setFullYear(2001));
console.log(date.setDate(11));
console.log(date);
