import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Welcome to SlashBoard</h1>
        <div>
          <label for="mountainSearch">Find you Mountain</label>
          <input type="text" id="mountainSearch" />
        </div>
        <a href="/login">Login</a>
      </div>
    );
  }
}

export default Landing;
