import React, { Component } from 'react';
import { getMountain } from '../utils/mountain-api';

class Mountain extends Component {
  constructor() {
    super();
    this.state = { weather: [] };
  }

  getMountainWeather() {
    getMountain(4).then(weather => {
      console.log(weather);
      this.setState({ weather });
    });
  }

  componentDidMount() {
    this.getMountainWeather();
  }

  render() {
    const { weather } = this.state;

    return (
      <div>
        <h1>Mountain Stats!</h1>
        <ul>
          {weather.map((weather, index) => (
            <li key={index}>
              <strong>{weather.name} </strong>
              {weather.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Mountain;
