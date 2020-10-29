import React, { Component } from 'react';
import featureImg from './../../../assets/img/home/recommend_bg.jpg'
class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <a href="http://act.mogujie.com/zzlx67">
        <img src={featureImg} alt=""  style={{width: '100%'}} />
        </a>
      </div>
    );
  }
}

export default Feature;
