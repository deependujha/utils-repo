import Users from './mongodb/models/User.js';
import Quotes from './mongodb/models/Quote.js';
import bcrypt from 'bcryptjs';

const resolvers = {
	Query: {
		users: async () => await Users.find(),
		quotes: async () => {
			return await Quotes.find();
		},
		user: async (parent, args) => {
			return await Users.findOne({ email: args.email });
		},
		iQuote: async (parent, { email }) => {
			const usrId = await Users.findOne({ email })._id;
			return await Quotes.find({ by: usrId });
		},
	},
	User: {
		quotes: async (usr) => {
			return await Quotes.find({ by: usr._id });
		},
	},

	Quote: {
		firstName: async (qt) => {
			const usr = await Users.findOne({ _id: qt.by });
			return usr.firstName;
		},
		lastName: async (qt) => {
			const usr = await Users.findOne({ _id: qt.by });
			return usr.lastName;
		},
		email: async (qt) => {
			const usr = await Users.findOne({ _id: qt.by });
			return usr.email;
		},
	},

	Mutation: {
		signUpUser: async (_, { newUser }) => {
			const hashedPassword = bcrypt.hashSync(newUser.password, 12);
			const usr = new Users({
				...newUser,
				password: hashedPassword,
			});
			return await usr.save();
		},

		writeQuote: async (_, { newQuote }) => {
			const usr = await Users.findOne({ email: newQuote.email });
			if (!usr) {
				throw new Error('User doesnot exists');
			}
			const passwd = bcrypt.compareSync(newQuote.password, usr.password);
			if (passwd === true) {
				const qt = new Quotes({
					quote: newQuote.quote,
					by: usr._id,
				});
				return await qt.save();
			} else {
				throw new Error('Wrong password');
			}
		},
	},
};

export default resolvers;
