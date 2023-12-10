// TODO: In TypeScript (TS), any and unknown are both types that represent dynamic or uncertain values.
// TODO: But, **any is type-unsafe**, while **unknown is type-safe**.

//? any

//* any is a type that captures all values, allowing you to do almost anything with them.
//* It's a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during migration.
//? It's like a escape hatch, you can use it to get out of the type system and do whatever you want. You're basically writing js at that point.

let a: any = 10;
a = true;
a = 'Deependu';

console.log(`value of a: ${a}`);
// a += 10; //! This should throw an error because a is of type string now. But, it doesn't because a is of type any.
console.log(`value of a: ${a}`);

// --------------------------------------------------------------

//? unknown

//* unknown is a type-safe counterpart of any.
//? It's a type that captures all values, just like any, but you have to do some form of checking before you can do anything with values of type unknown.

let b: unknown = 10;
b = true;
b = 'Deependu';

console.log(`value of b: ${b}`);
// b+=10; //? This throws an error because b is of type unknown.

//? You can use typeof to check the type of b.
if (typeof b === 'number') {
	b += 10;
	console.log(`value of b: ${b}`);
}
