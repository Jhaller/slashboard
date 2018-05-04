import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>SlashBoard</h1>
        <ul className="header">
          <li>
            <a href="/">Landing</a>
          </li>
          <li>
            <a href="/mountain">Mountain</a>
          </li>
          <li>
            <a href="/compare">Compare</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
