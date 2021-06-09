import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/App.css';
import DemoPage from './DemoPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: put some routing options in here */}
        <DemoPage/>
    </QueryClientProvider>
  );
}

export default App;
