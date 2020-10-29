import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './GoodsListItem.css';

@withRouter
class GoodsListItem extends Component {
  render() {
    const goodsItem = this.props.goodsItem;
    return (
      <div className="goods-item" style={{ paddingBottom: '40px',position: 'relative',width: '48%'}} onClick={this.itemClick}>
        <img src={goodsItem.image || goodsItem.show.img} onLoad={this.props.imgLoad} alt="" style={{width: '100%',borderRadius: '5px'}} />
        <div className="goods-info" style={{fontSize: '12px',position: 'absolute',bottom: '5px',left: '0',right: '0',overflow: 'hidden',textAlign: 'center'}}>
          <p style={{overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',marginBottom: '3px'}}>{goodsItem.title}</p>
      <span className="price" style={{color: 'var(--color-high-text)',marginRight: '20px'}}>{goodsItem.price}</span>
      <span className="collect" style={{position: 'relative'}}>{goodsItem.cfav}</span>
    </div>
      </div>
    );
  }

  itemClick = () => {
    this.props.history.push({pathname:'/detail',state:{iid:this.props.goodsItem.iid}})
  }
}

export default GoodsListItem;
