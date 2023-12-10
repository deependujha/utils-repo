// Abstract Classes

//? Abstract classes are base classes from which other classes may be derived.

//! They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.

//? The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

// ----------------------------------------------------------------------------------------------------

// Abstract classes are base classes from which other classes may be derived. They can't be instantiated directly.

abstract class Shape {
	constructor(public color: string) {}
	abstract getArea(): number;
	abstract getPerimeter(): number;

	// abstract methods can have implementations!
	protected getColor(): string {
		return this.color;
	}
}

// abstract classes force you to implement the abstract methods (if they are not implemented in the abstract class itself)
class Circle extends Shape {
	constructor(color: string, public radius: number) {
		super(color);
	}
	getArea(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
	getPerimeter(): number {
		return 2 * Math.PI * this.radius;
    }
    
    // we can also override the implementation of a parent class method
    getColor(): string {
        return 'this is a circle: ' + super.getColor();
    }
}

const circle = new Circle('red', 10);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.getColor());
