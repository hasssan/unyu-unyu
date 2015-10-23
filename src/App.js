import React, { Component } from 'react';
import { Nav } from './Nav';
import Gallery from './Gallery';
import { getInitialData, cuted } from './utils';

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

  handlerCuted = (itemCuted) => {
    const level = parseInt(itemCuted.level) + 1;

    const item = {
      id: itemCuted.id,
      level: level > 3 ? 0 : level
    }

    this.setState({images: cuted(item)});
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="section"></div>
        <Gallery
          images={this.state.images}
          handlerCuted={this.handlerCuted}
        />
      </div>
    );
  }
}
