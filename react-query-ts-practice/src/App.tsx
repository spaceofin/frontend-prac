import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppRouter } from 'router/AppRouter';
import { Loading } from 'components';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="right" />
      <Loading />
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
