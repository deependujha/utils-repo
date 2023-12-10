//? Arrays are used to store multiple values in a single variable.
// They can be created in mainly three ways:

//? 1. Using square brackets
//? 2. Using Array constructor
//? 3. Using array.of() method

//? 1. Using square brackets
const fruits: string[] = [ 'Apple', 'Orange', 'Banana' ];

//! string[] means array of strings
//! [string] means array with one string element

//? 2. Using Array constructor
// sourcery skip: use-array-literal
const numbers: number[] = new Array(1, 2, 3, 4, 5);

//? 3. Using array.of() method
const vegetables: string[] = Array.of('Tomato', 'Potato', 'Brinjal');

// ---------------------- Accessing Array Elements ----------------------
console.log(
	'---------------------- Accessing Array Elements ----------------------'
);
//? We can access array elements using their index. The index starts from 0.
console.log(`first fruit: ${fruits[0]}`);
console.log(`second fruit: ${fruits[1]}`);
console.log(`third fruit: ${fruits[2]}`);

// ---------------------- Array's length ----------------------
console.log("---------------------- Array's length ----------------------");

//? 1. length
console.log(`length of fruits array: ${fruits.length}`);

// ---------------------- Array methods ----------------------
console.log('---------------------- Array methods ----------------------');

//? 1. push() - adds one or more elements to the end of an array and returns the new length of the array.
//? 2. pop() - removes the last element from an array and returns that element.
//? 3. shift() - removes the first element from an array and returns that element.
//? 4. unshift() - adds one or more elements to the front of an array and returns the new length of the array.
//? 5. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
//? 6. lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present.
//? 7. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//? 8. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//? 9. sort() - sorts the elements of an array in place and returns the sorted array.

//! 1. push()
const newFruitsLength = fruits.push('Mango');
console.log(
	`fruits after push: ${fruits}. And, new length: ${newFruitsLength}`
);

//! 2. pop()
const poppedFruit = fruits.pop();
console.log(`fruits after pop: ${fruits}. And, popped fruit: ${poppedFruit}`);

//! 3. shift()
const shiftedFruit = fruits.shift();
console.log(
	`fruits after shift: ${fruits}. And, shifted fruit: ${shiftedFruit}`
);

//! 4. unshift()
const newFruitsLengthAfterUnshift = fruits.unshift('Apple');
console.log(
	`fruits after unshift: ${fruits}. And, new length: ${newFruitsLengthAfterUnshift}`
);

//! 5. indexOf()
const indexOfOrange = fruits.indexOf('Orange');
console.log(`index of Orange: ${indexOfOrange}`);

//! 6. lastIndexOf()
const indexOfApple = fruits.lastIndexOf('Apple');
console.log(`index of Apple: ${indexOfApple}`);

//! 7. includes()
const includesMango = fruits.includes('Mango');
console.log(`includes Mango: ${includesMango}`);

//! 8. reverse()
const reversedFruits = fruits.reverse();
console.log(`reversed fruits: ${reversedFruits}`);

//! 9. sort()
const sortedFruits = fruits.sort();
console.log(`sorted fruits: ${sortedFruits}`);

// ---------------------- iterate over array ----------------------
console.log('---------------------- iterate over array ----------------------');

//? 1. for loop
for (let i = 0; i < fruits.length; i++) {
	console.log(`fruit at index ${i}: ${fruits[i]}`);
}

//? 2. for...of loop
for (const fruit of fruits) {
	console.log(`fruit: ${fruit}`);
}

//? 3. forEach() method
fruits.forEach((fruit, index) => {
	console.log(`fruit at index ${index}: ${fruit}`);
});
