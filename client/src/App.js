import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { ProvideAuth, PrivateRoute } from "./hook/use-auth";

const Main = React.lazy(() => import("./pages/Main"));
const Login = React.lazy(() => import("./pages/Login"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <Main />
            </Suspense>
          </PrivateRoute>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
