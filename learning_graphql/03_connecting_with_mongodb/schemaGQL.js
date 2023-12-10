import { gql } from 'apollo-server';

const typeDefs = gql`
	#graphql
	type Query {
		users: [User]
		quotes: [Quote]
		user(email: String!): User
		iQuote(email: String!): [Quote]
	}
	type Mutation {
		signUpUser(newUser: createUser!): User
		writeQuote(newQuote: writeNewQuote): Quote
	}
	# if we are returning a custom datatype, we also need to declare it with all the values that can be fetched using this endpoint
	type User {
		_id: ID # graphql special variable type for storing Unique Ids
		firstName: String
		lastName: String
		email: String
		password: String
		quotes: [Quote]
	}

	type Quote {
		quote: String
		by: ID
		firstName: String
		lastName: String
		email: String
	}
	# Creating custom input type, if we need too many arguments to be passed
	input createUser {
		firstName: String
		lastName: String
		email: String
		password: String
	}

	input writeNewQuote {
		quote: String
		email: String
		password: String
	}
`;

export default typeDefs;
