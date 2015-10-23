import React from 'react';
import Image from './Image';

export default class Gallery extends React.Component {

  cuted = (itemCuted) => {
    this.props.handlerCuted(itemCuted);
  }

  render() {
    const images = this.props.images;
    let renderImages;

    if (images.length) {
      renderImages = images.map((item) => {
        return (
          <Image
            key={item.id}
            data={item}
            onCuted={this.cuted.bind(this, item)}
          />
        )
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
