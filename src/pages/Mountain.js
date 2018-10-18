import React, { Component } from 'react';
import { getMountain, getAllMountains } from '../utils/mountain-api';
import Search from '../components/Search';

class Mountain extends Component {
  constructor() {
    super();
    this.state = {
      mountainId: 0,
      mountain: {},
      mountains: [],
      snowReport: 'none'
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    if (this.state.mountainId) this.loadReport(this.state.mountainId);
  }

  loadReport(id) {
    getMountain(id).then(mountain => {
      this.setState({ mountain: mountain });
      console.log(mountain);
    });
  }

  getAllMountains() {
    getAllMountains().then(mountains => {
      this.setState({ mountains: mountains });
    });
  }

  handleSelect(id, name) {
    this.setState({ mountainId: id });
    this.loadReport(id);
  }

  render() {
    const { mountain } = this.state;

    return (
      <div>
        <Search
          mountainId={this.state.mountainId}
          onClick={this.handleSelect}
        />
        <h1>Mountain Stats</h1>
        {mountain.name ? (
          <div>
            <ul>
              <li>{mountain.name}</li>
              <li>
                {/*{mountain.address}, {mountain.city}, {mountain.country}{' '} */}
                {mountain.state}
              </li>
              <li>
                <span>Latitude</span>: {mountain.latitude}
              </li>
              <li>
                <span>Longitude</span>: {mountain.longitude}
              </li>
            </ul>
            <h2>snow report</h2>
            <table>
              <thead>
                <tr>
                  <th>Upper</th>
                  <th>Lower</th>
                  <th>Lifts</th>
                  <th>Last Snowfall</th>
                  <th>View Report</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {mountain.snowData.upper.elevation} -{' '}
                    {mountain.snowData.upper.temp} -{' '}
                    {mountain.snowData.upper.depth}
                  </td>
                  <td>
                    {mountain.snowData.lower.elevation} -{' '}
                    {mountain.snowData.lower.temp} -{' '}
                    {mountain.snowData.lower.depth}
                  </td>
                  <td>{mountain.snowData.lifts}</td>
                  <td>
                    {mountain.snowData.lastSnowfall ? (
                      <td>
                        {mountain.snowData.lastSnowfall.depth} -{' '}
                        {mountain.snowData.lastSnowfall.sinceDate}
                      </td>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    <a
                      href={'https://onthesnow.com' + mountain.snowData.url}
                      target="_blank"
                    >
                      View Report!
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h2>No mountain data</h2>
        )}
      </div>
    );
  }
}

export default Mountain;
