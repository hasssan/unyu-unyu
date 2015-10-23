import React, { Component } from 'react';
import { Nav } from './Nav';
import Gallery from './Gallery';
import { getInitialData } from './utils';

export default class App extends Component {
  constructor() {
    super();

    this.state = {images: []};
  }

  componentDidMount = () => {
    getInitialData(data => {
      this.setState({images: data});
    });
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="section"></div>
        <Gallery images={this.state.images}/>
      </div>
    );
  }
}
