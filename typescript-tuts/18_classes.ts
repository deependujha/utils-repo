// class in typescript


// this keyword is used to refer to the current class instance variable

class Student {
	name: string;
	age: number;
	subjects: string[];

	// constructor
	constructor(name: string, age: number, subjects: string[]) {
		this.name = name;
		this.age = age;
		this.subjects = subjects;
	}
}


let student1 = new Student( "John", 20, [ "Maths", "Science" ] );
console.log( student1 );

let student2 = new Student( "Rajan", 21, [ "Maths", "Science", "English" ] );
console.log( student2 );