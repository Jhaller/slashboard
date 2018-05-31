import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Mountain from './pages/Mountain';
import Settings from './pages/Settings';
import Callback from './components/Callback';

//import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/mountain" component={Mountain} />
        <Route path="/settings" component={Settings} />
        <Route path="/callback" component={Callback} />{' '}
        {/* Redirect to this after auth0 user login */}
      </Switch>
    </div>
  </Router>
);

export default App;
