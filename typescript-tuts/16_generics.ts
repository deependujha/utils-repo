//? Generics:

// Generics are used to create reusable components
// that can work on a variety of types rather than a single one.
// Generics work by creating a type that can be used with different types.

function logTheError<T, U>(error: T, myParameter: U): T {
	console.log(`typeof myParameter: ${typeof myParameter}`);

	if (typeof error === 'string') {
		console.log(`Error: ${error}`);
	} else if (typeof error === 'number') {
		console.log(`twice the Error Code is: ${error * 2}`);
	} else {
		console.log(`Error: ${error}`);
	}
	console.log(`-------------------------`);

	return error;
}

const error1 = logTheError<string, number>('Error 1', 404);
const error2 = logTheError<number, string>(404, 'alpha');
const error3 = logTheError<boolean, number>(true, 43);

console.log(`-------------------------`);

console.log(error1);
console.log(error2);
console.log(error3);
