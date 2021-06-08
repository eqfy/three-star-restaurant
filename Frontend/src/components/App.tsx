import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/App.css';
import { MenusPage } from './MenusPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: put some routing options in here */}
    </QueryClientProvider>
  );
}

export default App;
