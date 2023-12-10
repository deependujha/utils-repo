// Todo: The function call signature refers to the declaration or definition of a function, which includes the function name, parameters, and return type. The actual function is defined separately.

//? call signatures are typically used inside object type notations to describe the shape of functions within that object.

type Student = {
	name: string;
	age: number;
	courses: string[];
	greet: (message: string) => void; //! call signature
};

const student: Student = {
	name: 'John Doe',
	age: 20,
	courses: ['Math', 'Physics'],
	greet: (msg: string) => {
		console.log(`my msg is: ${msg}`);
	},
};

student.greet('Hello my name is John Doe');
