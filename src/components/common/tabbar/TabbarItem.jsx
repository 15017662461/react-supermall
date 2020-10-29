import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './tabbarItem.css'
@withRouter
class TabbarItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="tab-bar-item" onClick={this.handleClick.bind(this,this.props.path)}>
        {
          // this.props.children.map((Child,index) => {
          //   return <Child key={index}></Child>
          // })
          this.props.isActive ? this.props.children[1] : this.props.children[0]
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
