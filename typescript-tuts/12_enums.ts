// Todo: Enums in typescript are commonly used when you want to represent a set of related values and choose one value from multiple options.
//? Enums provide a convenient way to define a set of named values and associate them with specific numeric values.

enum Roles {
	ADMIN, // by default takes 0 as value and increments by 1. To use custom values, we can assign values to each enum member. For example, ADMIN = 1, USER = 2, SUPER_ADMIN = 3.
	USER,
}

type User = {
	name: string;
	email: string;
	role: Roles;
};

const user1: User = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	role: Roles.USER,
};

const user2: User = {
	name: 'Alpha',
	email: 'alpha@gmail.com',
	role: Roles.ADMIN,
};

const isAdmin = (user: User) => user.role === Roles.ADMIN;

console.log(`Is user1 admin: ${isAdmin(user1)}`);
console.log(`Is user2 admin: ${isAdmin(user2)}`);
