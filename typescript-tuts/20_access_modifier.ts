// Access modifier: public, private, protected

// todo: - if we don't specify any access modifier, it is public by default

/*
    !                   parent class    | child class    | other class
    *    --------------------------------------------------------------
    ?    Public      |       ✅         |     ✅         |      ✅
    ?    Protected   |       ✅         |     ✅         |      ❌
    ?    Private     |       ✅         |     ❌         |      ❌
    *    --------------------------------------------------------------
*/

class Parent {
	public x: number;
	protected y: number;
	private z: number;

	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	protected protectedMethod() {
		console.log('This is protected method in Parent class');
	}
}

class Child extends Parent {
	constructor(x: number, y: number, z: number) {
		super(x, y, z);
		console.log('value of x while initializing in child class is: ', this.x);
		console.log('value of y while initializing in child class is: ', this.y);
		// console.log('value of z while initializing in child class is: ', this.z); // Error
	}

	public publicMethod() {
		console.log(
			'This is public method in Child class that can access protected method in Parent class'
		);
		this.protectedMethod(); // Can access protected method in Parent class
	}
}

const parent1 = new Parent(1, 2, 3);
console.log(parent1.x);
// console.log( parent1.y ); // Error
// console.log( parent1.z ); // Error

const child1 = new Child(1, 2, 3);
console.log(child1.x);
// console.log( child1.y ); // Error
// console.log( child1.z ); // Error

child1.publicMethod();
