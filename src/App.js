import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';

//import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <Nav />
  </Router>
);

export default App;
