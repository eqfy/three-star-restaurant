import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/App.css';
import DemoPage from './DemoPage';
import { MenusPage } from './MenusPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserRoleProvider } from '../hooks/useUserRole';
import { NavBar } from './NavBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserRoleProvider>
        <Router>
          <Switch>
            <Route path="/menus">
              <NavBar />
              <MenusPage />
            </Route>
            <Route path="/">
              <DemoPage />
            </Route>
          </Switch>
        </Router>
      </UserRoleProvider>
    </QueryClientProvider>
  );
}

export default App;
