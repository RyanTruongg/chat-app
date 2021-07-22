import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { PrivateRoute } from '../../hook/use-auth';
import Sidebar from '../../component/Sidebar';
import Chat from '../../component/Chat';

const Main = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <PrivateRoute exact path="/home/t/:roomID">
          <Chat />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default Main;
