import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
