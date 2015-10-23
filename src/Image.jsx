import React from 'react';

const Image = React.createClass({
  render() {
    const url = ['https://i.imgur.com/', this.props.data.id, 'b.jpg'].join('');

    return (
      <div className="col s12 m2 item-container">
        <img src={url} className="circle image-item" />
        <div className="star-container center">
          <img src="/star.png" className="star" />
          <img src="/star.png" className="star" />
          <img src="/star.png" className="star" />
        </div>
      </div>
    )
  }
})

export default Image;
