import { ApolloProvider } from '@apollo/client';
import React from 'react';

import Products from './components/Products';

import { client } from './gqlClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Products />
    </ApolloProvider>
  );
}
