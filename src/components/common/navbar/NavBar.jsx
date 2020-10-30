import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="left">
          {
            this.props.left
          }
        </div>
        <div className="center">
        {
            this.props.center
          }
        </div>
        <div className="right">
        {
            this.props.right
          }
        </div>
      </div>
    );
  }
}

export default NavBar;
