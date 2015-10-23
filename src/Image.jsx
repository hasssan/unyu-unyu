import React from 'react';

const Image = React.createClass({
  render() {
    return (
      <div className="col s12 m2 item-container">
        <img src="https://i.imgur.com/gY53UW1b.jpg" className="circle image-item" />
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
