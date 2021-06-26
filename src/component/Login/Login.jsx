import { useLocation, Redirect } from 'react-router-dom';

import {
  useAuth
} from '../../hook/use-auth';
import('./login.css')

const Login = () => {
  let location = useLocation();
  const auth = useAuth();

  switch (auth.loginState) {
    case "listening":
      return (<p>Loading...</p>);
    case "loged":
      return (<Redirect to={{ pathname: "/", state: { from: location } }} />);
    case "notloged":
      return (
        <div className="login">
          <button onClick={auth.signin}>Sign in with Google</button>
        </div>
      );
    default:
      return (<p>Error</p>);
  }
}

export default Login;
