import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const typeDefs = gql`
	type Query {
		greet: String
		bye: String
		fighting: Boolean
	}
`;

const resolvers = {
	Query: {
		greet: () => {
			return 'hello world';
		},
		bye: () => {
			return 'bye bye! Happy learning.';
		},
		fighting: ()=>{
			return true;
		}
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(6969).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
