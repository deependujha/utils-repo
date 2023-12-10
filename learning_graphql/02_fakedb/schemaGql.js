import { gql } from 'apollo-server';

const typeDefs = gql`
	#graphql
	type Query {
		users: [User]
		quotes: [Quote]
		user(id: ID!): User
		iQuote(by: ID!): [Quote]
	}
	type Mutation {
		signUpDummyUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
		): User
		signUpDummyUserBetter(newUser: createUser!): User
	}

	type User {
		id: ID #graphql special variable type for storing Unique Ids
		firstName: String
		lastName: String
		email: String
		quotes: [Quote]
	}

	type Quote {
		quote: String
		by: ID
		firstName: String
		lastName: String
	}

	input createUser {
		firstName: String
		lastName: String
		email: String
		password: String
	}
`;

export default typeDefs;
