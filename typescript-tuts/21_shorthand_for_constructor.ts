// ShortHand for constructor initialization

// Todo: Just mention the access modifier in constructor parameter. It will automatically initialize the property with the same name and assign the value to it.

class ParentClass {
	constructor(public x: number, protected y: number, private z: number) {} //! x is public, y is protected, z is private
}

class ChildClass extends ParentClass {
	constructor(x: number, y: number, z: number, public a: number) {
		//! a is public
		super(x, y, z);
	}
}

const parentObj1 = new ParentClass( 1, 2, 3 );
console.log( parentObj1.x );
// console.log( parentObj1.y ); // Error
// console.log( parentObj1.z ); // Error