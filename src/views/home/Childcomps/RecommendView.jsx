import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecommendView.css'
class RecommendView extends Component {
  static propTypes = {
    recommends:PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="recommend">
        {
          this.props.recommends.map((item,index) => {
            return (<div className="recommend-item" key={index}>
              <img src={item.image} alt=""/>
              <div>{item.title}</div>
            </div>)
          })
        }
      </div>
    );
  }
}

export default RecommendView;
