import React, { Component } from 'react';
import { Nav } from './Nav';
import Gallery from './Gallery';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="section"></div>
        <Gallery />
      </div>
    );
  }
}
