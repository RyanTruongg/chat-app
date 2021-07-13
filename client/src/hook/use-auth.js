import React, { useState, useContext, useEffect } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import socket from '../service/websocket';
// import firebase from '../service/firebase';


const authContext = React.createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState("listening");

  useEffect(() => {
    let unsubcribe = null;
    import('../service/firebase').then(({ default: firebase }) => {
      unsubcribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          setLoginState("loged");
        } else {
          setUser(null);
          setLoginState("notloged");
          socket.disconnect();

        }
      })
    })
    return unsubcribe;
  }, [])

  useEffect(() => {
    if (loginState === "loged" && user) {
      socket.auth = { user };
      socket.connect();
    }
  }, [user, loginState]);

  const signin = () => {
    import('../service/firebase').then(({ default: firebase }) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider)
        .then(() => {
          console.log("Login Success")
        })
        .catch(() => {
          console.log("Login Failed");
        });
    })

  }

  const signout = () => {
    import('../service/firebase').then(({ default: firebase }) => {
      firebase.auth().signOut()
        .then(() => setUser(null));
    })
  }

  return {
    loginState,
    user,
    signin,
    signout
  }
}

export function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        switch (auth.loginState) {
          case "listening":
            return (<p>Loading...</p>);
          case "loged":
            return (children);
          case "notloged":
            return (
              <Redirect to={{ pathname: "/login", state: { from: location } }} />
            )
          default:
            return (<p>Error</p>);
        }
      }}
    />
  )
}