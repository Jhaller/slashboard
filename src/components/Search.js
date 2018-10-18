import React, { Component } from 'react';
import { searchMountain } from '../utils/mountain-api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resortID: 0,
      results: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange = () => {
    if (this.search.value.length > 2) {
      this.searchMountain(this.search.value);
    } else {
      this.setState({ results: [] });
    }
  };

  handleClick = e => {
    this.props.onClick(e.target.dataset.value, e.target.innerText);
    this.search.value = e.target.innerText;
    this.setState({ results: [] });
  };

  searchMountain(query) {
    searchMountain(query).then(response => {
      this.setState({
        results: response
      });
      //console.log(response);
    });
  }

  render() {
    const results = this.state.results;

    const optionList = results.length ? (
      results.map(result => (
        <li
          onClick={this.handleClick}
          key={result.id}
          data-value={result.snowId}
        >
          {result.name}
        </li>
      ))
    ) : (
      <li>no resort</li>
    );

    return (
      <div>
        <input
          type="text"
          name="resort-search"
          placeholder="Search resort..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <ul>{optionList}</ul>
      </div>
    );
  }
}

export default Search;
