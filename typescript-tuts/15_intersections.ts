type person = {
	name: string;
	age: number;
};

type employee = {
	empId: number;
	salary: number;
};

//! Intersection - combines multiple types into one
const workingPerson: person & employee = {
	name: 'John',
	age: 25,
	empId: 123,
	salary: 50000,
};
