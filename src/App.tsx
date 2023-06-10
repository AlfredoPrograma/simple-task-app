import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { graphqlClient } from '@/graphql/client';

import { router } from './router';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
