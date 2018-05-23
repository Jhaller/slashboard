import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Mountain from '../pages/Mountain';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            SlashBoard
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/mountain">Mountain</Link>
          </li>
          <li>
            <Link to="/compare">Compare</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <button className="btn btn-info log">Log In</button>
          </li>
          <li>
            <button className="btn btn-danger log">Log Out</button>
          </li>
        </ul>
        <div>
          <Route path="/mountain" component={Mountain} />
        </div>
      </nav>
    );
  }
}

export default Nav;
