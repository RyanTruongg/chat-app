import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  ProvideAuth,
  PrivateRoute,
} from './hook/use-auth';

import { ProvideContactList } from './hook/use-contact-list';

const Sidebar = React.lazy(() => import('./component/Sidebar'));
const Chatbox = React.lazy(() => import('./component/Chatbox'));
const Login = React.lazy(() => import('./component/Login'));


// import socket from './socket/socket';

function App() {

  return (
    <div className="app">
      <ProvideAuth>
        <Router>
          <Route exact path="/login">
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          </Route>

          <PrivateRoute exact path="/">
            <Redirect to="home" />
          </PrivateRoute>

          <PrivateRoute path="/home">
            <ProvideContactList>
              <Router>
                <Suspense fallback={<div>Loading...</div>}>
                  <Sidebar />
                </Suspense>
                <Switch>
                  <PrivateRoute exact path="/home/t/:roomID">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Chatbox />
                    </Suspense>
                  </PrivateRoute>
                </Switch>
              </Router>
            </ProvideContactList>
          </PrivateRoute>

        </Router>
      </ProvideAuth>

    </div>
  );
}

export default App;
