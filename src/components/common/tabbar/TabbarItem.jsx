import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './tabbarItem.css'
@withRouter
class TabbarItem extends Component {
  render() {
    return (
      <div className="tab-bar-item" onClick={this.handleClick.bind(this,this.props.path)}>
        {
          // this.props.children.map((Child,index) => {
          //   return <Child key={index}></Child>
          // })
          this.props.isActive ? this.props.active : this.props.deActive
        }
        <span style={{color:this.props.isActive ? 'red' : 'black'}}>{this.props.title}</span>
      </div>
    );
  }
  handleClick = (path) => {
    // console.log(path)
    this.props.history.push(path)
  }
}


export default TabbarItem;
