import { users, quotes } from './fakeDB.js';

const resolvers = {
	Query: {
		users: () => users,
		quotes: () => {
			return quotes;
		},
		user: (parent, args) => {
			return users.find((ur) => ur.id == args.id);
		},
		iQuote: (parent, { by }) => {
			return quotes.filter((qt) => qt.by == by);
		},
	},
	User: {
		quotes: (usr) => {
			return quotes.filter((quote) => quote.by == usr.id);
		},
	},

	Quote: {
		firstName: (qt) => {
			return users.find((ur) => ur.id == qt.by).firstName;
		},
		lastName: (qt) => {
			return users.find((ur) => ur.id == qt.by).lastName;
		},
	},

	Mutation: {
		signUpDummyUser: (_, { firstName, lastName, email, password }) => {
			const id = Math.floor(Math.random() * 1000 + 1).toString();
			// console.log(id);
			users.push({ id, firstName, lastName, email, password });
			return users.find((ur) => ur.id == id);
		},
		signUpDummyUserBetter: (_, { newUser }) => {
			const id = Math.floor(Math.random() * 1000 + 1).toString();
			// console.log(id);
			users.push({ id, ...newUser });
			return users.find((ur) => ur.id == id);
		},
	},
};

export default resolvers;
