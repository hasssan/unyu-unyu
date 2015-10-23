import React from 'react';
import Image from './Image';

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="section">
        <div id="collection" className="row">
          <Image />
        </div>
      </div>
    )
  }
}
