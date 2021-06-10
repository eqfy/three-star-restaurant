import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/App.css';
// import EmployeePage from './EmployeePage';
// import { MenusPage } from './MenusPage';
import DemoPage from './DemoPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: put some routing options in here */}
      {/* <EmployeePage /> */}
      {/* <MenusPage/> */}
      <DemoPage />
    </QueryClientProvider>
  );
}

export default App;
