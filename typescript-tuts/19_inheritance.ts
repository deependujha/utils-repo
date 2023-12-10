//  TODO: Inheritance

//! `extends` keyword is used to inherit a class

//! super.functionName() is used to call parent class method

class Bird {
	protected legs: number;

	constructor(legs: number) {
		this.legs = legs;
	}

	fly() {
		console.log('Bird is flying');
	}
}

class Parrot extends Bird {
	constructor(legs: number = 2) {
		super(legs); // call parent class constructor
	}

	sing() {
		console.log('Parrot is singing');
	}

	getLegs() {
		console.log(`Parrot has ${this.legs} legs`);
	}
}

class Eagle extends Bird {
	constructor(legs: number = 2) {
		super(legs); // call parent class constructor
	}

	sing() {
		console.log('Eagle is singing');
	}

	fly() {
		console.log(`Eagle is flying above the clouds`);
		super.fly(); // call parent class method
		console.log(`It's raining, Eagle is flying below the clouds`);
	}
}

let parrot = new Parrot(4);
parrot.fly();
parrot.sing();
parrot.getLegs();

console.log(`------------------------`);

let eagle = new Eagle();
eagle.fly();
eagle.sing();
// console.log(eagle.legs) //! error: Property 'legs' is protected and only accessible within class 'Bird' and its subclasses.
