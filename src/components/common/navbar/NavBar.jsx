import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;
