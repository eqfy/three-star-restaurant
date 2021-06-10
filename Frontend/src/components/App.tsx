import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/App.css';
import EmployeePage from './EmployeePage';
import { MenusPage } from './MenusPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: put some routing options in here */}
      {/* <EmployeePage/> */}
      {/* <MenusPage/> */}
    </QueryClientProvider>
  );
}

export default App;
