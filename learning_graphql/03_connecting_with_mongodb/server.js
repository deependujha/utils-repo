import './mongodb/conn.js';
import typeDefs from './schemaGQL.js';
import resolvers from './resolvers.js';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

// here we are defining our server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// here we are passing 6969 port no. If we donot pass it, it will run on 4000 port by default.
server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
