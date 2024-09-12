import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Todos } from 'components/Todos';
import { TanStackQueryRepo } from 'components/TanStackQueryRepo';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="right" />
      <Todos />
      <hr />
      <TanStackQueryRepo />
    </QueryClientProvider>
  );
}

export default App;
