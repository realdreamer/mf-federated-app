import { ApolloProvider } from '@apollo/client';
import React from 'react';

import StarShips from './components/StarShips';

import { client } from './gqlClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StarShips />
    </ApolloProvider>
  );
}
