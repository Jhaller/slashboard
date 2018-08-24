import React, { Component } from 'react';
import { getMountain, getAllMountains } from '../utils/mountain-api';

class Mountain extends Component {
  constructor() {
    super();
    this.state = {
      mountain: {},
      mountains: []
    };
  }

  getMountain() {
    getMountain(4).then(mountain => {
      this.setState({ mountain: mountain });
    });
  }

  getAllMountains() {
    getAllMountains().then(mountains => {
      this.setState({ mountains: mountains });
    });
  }

  componentDidMount() {
    this.getMountain();
  }

  render() {
    const { mountain } = this.state;

    return (
      <div>
        <h1>Mountain Stats!</h1>
        {mountain ? (
          <ul>
            <li>{mountain.name}</li>
            <li>
              {mountain.address}, {mountain.city}, {mountain.state}{' '}
              {mountain.country}
            </li>
            <li>
              <span>Latitude:</span>: {mountain.latitude}
            </li>
            <li>
              <span>Longitude</span>: {mountain.longitude}
            </li>
          </ul>
        ) : (
          <h2>No mountain data</h2>
        )}
      </div>
    );
  }
}

export default Mountain;
