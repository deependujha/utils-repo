// In Typescript an implements clause can be used to verify that a class conforms to a specific interface.
// If a class fails to implement an interface correctly, an error will be generated.Classes can implement a single interface or multiple interfaces at once.

// ----------------------------------------------------------------------------------------------------

// Interfaces
interface IShape {
	color: string;
	getArea(): number;
	getPerimeter(): number;
}

// ----------------------------------------------------------------------------------------------------

// Classes implementing an interface must adhere to the interface's structure.
class MyCircle implements IShape {
	constructor(public color: string, public radius: number) {} // we can add more properties to the class, but can't remove the ones from the interface
	getArea(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
	getPerimeter(): number {
		return 2 * Math.PI * this.radius;
	}

	printAreaAndPerimeter(): void {
		console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
	} // we can add additional methods to the class
}



//! Class implements interface
//! Class extends abstract class 