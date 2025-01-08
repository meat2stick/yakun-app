import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://13.214.137.214/graphql', // TODO: Make this into an env variable.
    cache: new InMemoryCache(),
});

export default client;