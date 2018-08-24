import React, { Component } from 'react';
import { isLoggedIn, loginRedirect } from '../utils/AuthService';

class Settings extends Component {
  render() {
    return !isLoggedIn() ? (
      loginRedirect()
    ) : (
      <div>
        <h1>Change User Settings</h1>
      </div>
    );
  }
}

export default Settings;
