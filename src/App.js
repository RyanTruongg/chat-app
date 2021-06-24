import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Sidebar from './component/Sidebar';
import Chatbox from './component/Chatbox';
import Login from './component/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Sidebar />
          <Chatbox />
        </Route>

      </Router>
    </div>
  );
}

export default App;
