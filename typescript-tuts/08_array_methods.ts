// Todo: Array Methods (forEach, map, filter, reduce) - none of these methods mutate the original array

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//! 1. forEach - iterate over each element of array and perform some operation
arr.forEach((value, index, array) => {
	// console.log(value, index, array);
});

//! 2. map - iterate over each element of array and perform some operation and return new array
let arr2 = arr.map((value, index, array) => {
	return value * (index + 1);
});
console.log(arr2);

//! 3. filter - iterate over each element of array and perform some operation and return new array with filtered elements
let arr3 = arr.filter((value, index, array) => {
	return value > 50;
});
console.log(arr3);

//! 4. reduce - iterate over each element of array and perform some operation and return single value
let arr4 = arr.reduce((prevValue, currValue, index, array) => {
	// console.log(`prevValue: ${prevValue}, currValue: ${currValue},`);
	return prevValue + currValue;
});
console.log(arr4);

// ---------------------------------------------------------------

const myMapFunction = (val: number, index: number) => {
	return val ** 2;
};

// TODO: we can pass function as argument to another function
const myNewArray = arr.map(myMapFunction);
console.log(myNewArray);
