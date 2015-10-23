import React from 'react';

const Image = React.createClass({
  render() {
    const url = ['https://i.imgur.com/', this.props.data.id, 'b.jpg'].join('');

    const starGenerator = () => {
      const level = this.props.data.level;
      const id = this.props.data.id;
      const star = [];

      for (let i=0; i < level; i++) {
        star.push(<img src="/star.png" className="star" key={id+i} />)
      }

      return star;
    }

    return (
      <div className="col s12 m2 item-container">
        <img src={url} className="circle image-item" />
        <div className="star-container center">
          {starGenerator()}
        </div>
      </div>
    )
  }
})

export default Image;
