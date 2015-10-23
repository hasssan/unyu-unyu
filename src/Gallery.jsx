import React from 'react';
import Image from './Image';

export default class Gallery extends React.Component {
  render() {
    const images = this.props.images;
    let renderImages;

    if (images.length) {
      renderImages = images.map((item) => {
          return <Image data={item} key={item.id} />
      })
    }

    return (
      <div className="section">
        <div id="collection" className="row">
          {renderImages}
        </div>
      </div>
    )
  }
}
