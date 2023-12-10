import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import resolvers from './resolvers.js';
import typeDefs from './schemaGql.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
	console.log(`🚀 Application started on ${url}`);
});
