import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4041/graphql',
  cache: new InMemoryCache(),
})

export default withApollo(apolloClient)
