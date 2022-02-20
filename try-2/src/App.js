import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { ErrorLink, onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`GraphQL error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'http//localhost:4000'}),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div>React app</div>
    </ApolloProvider>
  );
}

export default App;
