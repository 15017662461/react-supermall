import React, { Component } from 'react';
import GoodsListItem from './GoodsListItem.jsx'

class GoodsList extends Component {
  render() {
    return (
      <div className="goods" style={{display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'}}>
        {
          this.props.goods.map((item,index) => {
            return (<GoodsListItem key={index} goodsItem={item} imgLoad = {this.props.imgLoad}></GoodsListItem>)
          })
        }
      </div>
    );
  }
}

export default GoodsList;
