import { ApolloProvider } from '@apollo/client';

import { graphqlClient } from './graphql/client';
import { TasksPage } from './pages/Tasks';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <TasksPage />
    </ApolloProvider>
  );
}

export default App;
