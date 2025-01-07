import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://0.0.0.0:3000/graphql', // TODO: Make this into an env variable.
    cache: new InMemoryCache(),
});

export default client;