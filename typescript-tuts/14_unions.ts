const myUnionFunction = (input: string | number) => {
	if (typeof input === 'string') {
		console.log(input.toUpperCase());
	} else {
		console.log(input ** 2);
	}
};

myUnionFunction( 'hello' ); // HELLO
myUnionFunction( 5 ); // 25