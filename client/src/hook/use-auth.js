import React, { useState, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import socket from "../service/websocket";
import importFirebase from "../service/importFirebase";

import userAPI from "../api/userAPI";

const authContext = React.createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState("listening");

  useEffect(() => {
    const unsubcribe = importFirebase.then((firebase) => {
      const unsubcribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          setLoginState("loged");
        } else {
          setUser(null);
          setLoginState("notloged");
          socket.disconnect();
        }
        return unsubcribe;
      });
    });
    return unsubcribe;
  }, []);

  useEffect(() => {
    // Create new user
    importFirebase.then((firebase) => {
      firebase
        .auth()
        .getRedirectResult()
        .then((result) => {
          const isNewUser = result.additionalUserInfo.isNewUser;
          if (isNewUser) {
            userAPI
              .createNewUser(result.user.uid)
              .then(() => console.log("New user created"));
          }
        })
        .catch((error) => {});
    });
  }, []);

  useEffect(() => {
    // Connect socket
    if (loginState === "loged" && user) {
      importFirebase.then((firebase) => {
        firebase
          .auth()
          .currentUser?.getIdToken(true)
          .then((idToken) => {
            socket.auth = { idToken };
            socket.connect();
          });
      });
    }
  }, [user, loginState]);

  const signin = () => {
    importFirebase.then((firebase) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    });
  };

  const signout = () => {
    importFirebase.then((firebase) => {
      firebase
        .auth()
        .signOut()
        .then(() => setUser(null));
    });
  };

  return {
    loginState,
    user,
    signin,
    signout,
  };
}

export function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        switch (auth.loginState) {
          case "listening":
            return <p>Authenticating...</p>;
          case "loged":
            return children;
          case "notloged":
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              />
            );
          default:
            return <p>Error</p>;
        }
      }}
    />
  );
}
