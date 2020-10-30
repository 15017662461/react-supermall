import React, { Component } from "react";
import './TabControl.css'

import PropTypes from 'prop-types';
class TabControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex : 0
    }
  }
  static propTypes  = {
    title:PropTypes.array.isRequired,
    titleClick:PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="tab-control">
        {this.props.titles.map((item, index) => {
          return (
            <div className={`tab-control-item ${this.state.currentIndex === index ? "active" : " "}`} key={index} onClick={this.titleClick.bind(this,index)} >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }
  
  titleClick = (index) => {
    this.setState({ currentIndex:index  });
    this.props.titleClick(index);
  }
}

export default TabControl;
