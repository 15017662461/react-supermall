import React, { Component } from 'react';
import './CartListItem.css'
class CartListItem extends Component {
  render() {
    return (
      <div id="shop-item">
        <div className="item-img">
          <img src={this.props.itemInfo.image} alt="商品图片" />
        </div>
        <div className="item-info">
          <div className="item-title">{this.props.itemInfo.title}</div>
          <div className="item-desc">商品描述: {this.props.itemInfo.desc}</div>
          <div className="info-bottom">
            <div className="item-price left">¥{this.props.itemInfo.price}</div>
            <div className="item-count right">x{this.props.itemInfo.count}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartListItem;
