let myNaNValue: number = NaN;

console.log(myNaNValue);
console.log(typeof myNaNValue);
// console.log( myNaNValue === NaN ) // NaN is not comparable
console.log(isNaN(myNaNValue)); // true

if (myNaNValue) {
	console.log('myNaNValue evaluates to be true');
} else {
	console.log('myNaNValue evaluates to be false'); // this is the case
}
