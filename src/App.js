import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Sidebar from './component/Sidebar';
import Chatbox from './component/Chatbox';
import Login from './component/Login';

import {
  ProvideAuth,
  PrivateRoute,
} from './hook/use-auth';

// import socket from './socket/socket';

function App() {

  return (
    <div className="app">
      <ProvideAuth>
        <Router>
          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/">
            <Router>
              <Sidebar />
              <Switch>
                <PrivateRoute exact path="/t/:roomID">
                  <Chatbox />
                </PrivateRoute>
              </Switch>
            </Router>
          </PrivateRoute>

        </Router>
      </ProvideAuth>

    </div>
  );
}

export default App;
