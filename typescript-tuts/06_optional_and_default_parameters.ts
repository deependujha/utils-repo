//? Default parameters (=) - If we don't pass any value to the parameter, it will take the default value
//? Optional parameters (?) - If we don't pass any value to the parameter, it will take the undefined value

//! c has a default value of 0
//! d is an optional parameter. We can check for its existence using if(d). If it exists, we can use it in our function. Question mark (?) is used to make a parameter optional

function add(a: number, b: number, c: number = 0, d?: number): number {
	if (d) {
		return a + b + c + d;
	}
	return a + b + c;
}

console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3));
