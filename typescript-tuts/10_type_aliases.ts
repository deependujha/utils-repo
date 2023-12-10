// In typescript, a type alias is a way to give a name to a specific type or combination of types.

// It allows us to create a new name for a type, making it easier to reuse it in several places.

type Student = {
	name: string;
	age: number;
	course: string;
	hasPassed?: boolean; //! (?) optional property
};

const myStudent1: Student = {
	name: 'John',
	age: 30,
	course: 'Typescript',
	hasPassed: true,
};

const myStudent2: Student = {
	name: 'Alex',
	age: 16,
	course: 'Rust',
};

const myStudent3: Student = {
	name: 'Mox',
	age: 23,
	course: 'Go',
	hasPassed: false,
};

// accessing properties
console.log(myStudent1.name);

// changing properties
myStudent2.age = 17;
console.log(myStudent2.age);
