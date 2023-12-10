// define sum function
function mySum(a: number, b: number): number {
	return a + b;
}

const mySumArrow = (a: number, b: number): number => {
	return a + b;
};

const mySumArrow2 = (a: number, b = 10): number => a + b;

// call sum function
let result = mySum(10, 20);
console.log(result);

let resultArrow = mySumArrow(10, 20);
console.log( resultArrow );

let resultArrow2 = mySumArrow2( 10 );
console.log( resultArrow2 );
