import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h5> Type a city name: </h5>
        <SearchBar/ >
      </div>
    );
  }
}
