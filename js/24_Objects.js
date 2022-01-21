// In JavaScript, almost "everything" is an object.

/*
! Create Object
? 4 methods to create a Object in JS

* Create a single object, using an object literal.
const person = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
};
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;

* Create a single object, with the keyword new.
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;

* Define an object constructor, and then create objects of the constructed type.
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}
const personOne = new Person('testFirstNameOne', 'testLastNameOne');

* Create an object using Object.create().
const Person = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
};
const p1 = Object.create(Person);
*/
