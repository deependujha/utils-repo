//! Static properties and methods

//? Static properties and methods are associated with & accessed directly from the class itself, not from an instance of the class.

class CircleOperations {
	static PI: number = 3.14;

	static circumferenceOfCircle(radius: number): number {
		return 2 * CircleOperations.PI * radius;
	}

	static areaOfCircle(radius: number): number {
		return CircleOperations.PI * radius * radius;
	}
}


// we don't need to create an instance of the class to access static properties and methods.
console.log( CircleOperations.PI ); // 3.14
console.log( CircleOperations.circumferenceOfCircle( 5 ) ); // 31.400000000000002
console.log( CircleOperations.areaOfCircle( 5 ) ); // 78.5