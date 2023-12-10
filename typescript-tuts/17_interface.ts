// Interface:

// Similar to type aliases, interfaces can be used to name an object type.
// Can be used to describe the shape of an object

interface Person {
	firstName: string;
	lastName: string;
	age: number;
	isAlive: boolean;
	// can also have methods
	sayHello: () => void;
}

// extend an interface
interface PersonWithAddress extends Person {
	address: string;
}

// if you don't want to create separate interface for adding just a few properties, you can **open the interface and add the properties**

interface Person {
	phoneNumber: string;
}

//? Using the interface:
//? 1. Create an object that matches the interface
const person1: Person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25,
	isAlive: true,
	sayHello: () => console.log('Hello'),
	phoneNumber: '1234567890',
};

// ------------------------------

//! type vs interface

//? Both are very similar, but there are some subtle differences.

//? 1. Interfaces can only be used to describe objects, but type aliases can describe other types like primitives, unions, and tuples.

//? 2. Interfaces are also able to be extended, but type aliases can not. Well, technically they can using intersection types, but that's a bit of a hack.

/* ```js
interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithAge extends Person {
    age: number;
}

------------------------------

type Person = {
    firstName: string;
    lastName: string;
}

type PersonWithAge = Person & {
    age: number;
}
``` */

//? 3. Interfaces are always open ended, meaning that you can always add properties to an interface even if it's already been defined. Type aliases, on the other hand, can not be re-opened once defined.

/* ```js
interface Person {
    firstName: string;
    lastName: string;
}

interface Person {
    age: number;
}

//! No error

------------------------------

type Person = {
    firstName: string;
    lastName: string;
}

type Person = {
    age: number;
}

//! Error: Duplicate identifier 'Person'
``` */
