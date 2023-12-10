const student1: {
	name: string;
	age: number;
	course: string;
} = {
	name: 'John',
	age: 30,
	course: 'Typescript',
};

const student2: {
	name: string;
	age: number;
	course: string;
} = {
	name: 'Alex',
	age: 16,
	course: 'Rust',
};

const student3: {
	name: string;
	age: number;
	course: string;
} = {
	name: 'Mox',
	age: 23,
	course: 'Go',
};

// accessing properties
console.log(student1.name);

// changing properties
student2.age = 17;
console.log(student2.age);