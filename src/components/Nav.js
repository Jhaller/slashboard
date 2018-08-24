import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">SlashBoard</Link>
        </div>
        <ul>
          <li>
            <NavLink to="/mountain">Mountain</NavLink>
          </li>
          <li>
            <NavLink to="/compare">Compare</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            {isLoggedIn() ? (
              <button className="log" onClick={() => logout()}>
                Log Out
              </button>
            ) : (
              <button className="log" onClick={() => login()}>
                Log In
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
