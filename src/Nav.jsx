import React from 'react';

export const Nav = React.createClass({
  render() {
    return (
      <div className="section">
        <div className="row">
          <div id="cute-selector" className="col s12 m8 offset-m2 center">
            <a className="waves-effect waves-light btn light-green darken-2 level">All</a>
            {' '}
            <a className="waves-effect waves-light btn light-green darken-2 level" data-level="1">Lucu</a>
            {' '}
            <a className="waves-effect waves-light btn light-green darken-2 level" data-level="2">Unyu</a>
            {' '}
            <a className="waves-effect waves-light btn light-green darken-2 level" data-level="3">Unyuuuu!</a>
          </div>
        </div>
      </div>
    )
  }
})
