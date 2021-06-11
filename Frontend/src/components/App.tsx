import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserRoleProvider } from '../hooks/useUserRole';
import { NavBar } from './NavBar';
import { MenusPage } from './MenusPage';
import EmployeePage from './EmployeePage';
import DemoPage from './DemoPage';

import '../styles/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserRoleProvider>
        <Router>
          <Switch>
            <Route path="/employees">
              <NavBar />
              <EmployeePage />
            </Route>
            <Route path="/menus">
              <NavBar />
              <MenusPage />
            </Route>
            <Route path="/orders">
              <NavBar />
              {/* TODO: put orders page here */}
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
