import React from 'react';
import './DetailBaseInfo.css'
const DetailBaseInfo = (props) => {
  return (
    <div>
      {
        Object.keys(props.goods).length === 0 ? null : 
        <div className="base-info">
          <div className="info-title">{props.goods.title}</div>
        <div className="info-price">
      <span className="n-price">{props.goods.newPrice}</span>
      <span className="o-price">{props.goods.oldPrice}</span>
      <span className="discount">{props.goods.discount}</span>
    </div>
    <div className="info-other">
      <span>{props.goods.columns[0]}</span>
      <span>{props.goods.columns[1]}</span>
      <span>{props.goods.services[props.goods.services.length-1].name}</span>
    </div>
    <div className="info-service">
      {/* <span className="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" />
      <span>{{goods.services[index-1].name}}</span> </span>*/}
      {
        // console.log(props.goods.services)
        props.goods.services.map((item,index) => {
        return <span key={index} className="info-service-item"><img src={item.icon} alt="" /><span>{item.name}</span></span>
        })
      }
      
    </div>
        </div>
      }
    </div>
  );
}

export default DetailBaseInfo;
